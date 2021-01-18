
//export {}
import "./main.css"
const rust = import('./pkg/rust_wasm_demo')
const canvas = document.getElementById('mainCanvas')
const gl = canvas.getContext('webgl', {antialias: true});

function colorToSignedArrayValues(s) {
    let r = parseInt(s.substr(1, 2), 16);
    let g = parseInt(s.substr(3, 2), 16);
    let b = parseInt(s.substr(5, 2), 16);
    return [r, g, b];
}


rust
  .then((m) => {
    function getColorFromElement(name) {
      let rgb = colorToSignedArrayValues(document.getElementById(name).value);
      let color = new m.Color(rgb[0], rgb[1], rgb[2]);
      return color;
    }
    document.getElementById("submit").addEventListener("click", () => {
      var inText = document.getElementById("text").value;
      m.greet(inText);
    });

    if (!gl) {
      alert("WebGL is not working as expected!");
      return;
    }

    // Moved to gl_setup.rs
    // gl.enable(gl.BLEND);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const FPS_THROTTLE = 1000.0 / 30.0; // ms/fps
    let lastDrawTime = -1;
    let glClient = new m.GlClient();
    const initialTime = Date.now();
    let lastWidth = 0;
    let lastHeight = 0;

    function render() {
      window.requestAnimationFrame(render);
      const currentTime = Date.now();
      var updateData = new m.UpdateData();

      if (currentTime >= lastDrawTime + FPS_THROTTLE) {
        lastDrawTime = currentTime;

        //resize window handler
        if (lastWidth != canvas.clientWidth || lastHeight != canvas.width) {
          lastWidth = canvas.clientWidth;
          lastHeight = canvas.clientHeight;

          let width = window.innerWidth;
          canvas.width = width;
          canvas.style.width = width;

          let height = window.innerHeight;
          canvas.height = height;
          canvas.style.height = height;

          gl.viewport(0, 0, width, height);
        }

        let elapseTime = currentTime - initialTime;

        updateData.time = elapseTime;
        updateData.width = canvas.clientWidth;
        updateData.height = canvas.clientHeight;
        updateData.triangle_color = getColorFromElement("triangle");
        updateData.gradient0 = getColorFromElement("gradient0");
        updateData.gradient1 = getColorFromElement("gradient1");
        updateData.gradient2 = getColorFromElement("gradient2");
        updateData.gradient3 = getColorFromElement("gradient3");
        updateData.gradient4 = getColorFromElement("gradient4");
        glClient.update(updateData);
        glClient.render();
      }
    }

    render();
  })
  .catch(function (reason) {
    console.error(reason);
  });