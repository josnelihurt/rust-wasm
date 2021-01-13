// import * as wasm from "rust-wasm";
const rust = import('./pkg/rust_wasm_demo')
const canvas = document.getElementById('mainCanvas')
const gl = canvas.getContext('webgl', {antialias: true});

rust.then( m => {
    document.getElementById("submit").addEventListener("click", () => {
            var inText = document.getElementById("text").value;
            m.greet(inText);
        });
    
    
    if(!gl){
        alert('WebGL is not working as expected!')
        return;
    }

    // Moved to gl_setup.rs
    // gl.enable(gl.BLEND);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const FPS_THROTTLE = 1000.0 / 30.0; // ms/fps
    let lastDrawTime = -1;
    glClient = new m.GlClient();
    const initialTime = Date.now();
    let lastWidth = 0;
    let lastHeight = 0;

    function render(){
        window.requestAnimationFrame(render);
        const currentTime = Date.now();

        if(currentTime >= lastDrawTime + FPS_THROTTLE){
            lastDrawTime = currentTime;

            //resize window handler
            if (lastWidth != canvas.clientWidth || lastHeight != canvas.width){
                lastWidth = canvas.clientWidth;
                lastHeight = canvas.clientHeight;

                width = window.innerWidth;
                canvas.width = width;
                canvas.style.width = width;

                height = window.innerHeight;
                canvas.height = height;
                canvas.style.height = height; 

                gl.viewport(0, 0, width, height);
            }

            let elapseTime = currentTime - initialTime;
            glClient.update(elapseTime, canvas.clientWidth, canvas.clientHeight);
            glClient.render();
        }
    }

    render();
});

