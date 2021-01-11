// import * as wasm from "rust-wasm";
const rust = import('./pkg/rust_wasm_demo')
const canvas = document.getElementById('mainCanvas')
const gl = canvas.getContext('webgl', {antialias: true});

rust.then( m => {
    if(!gl){
        alert('WebGL is not working as expected!')
        return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const FPS_THROTTLE = 1000.0 / 30.0; // ms/fps
    var lastDrawTime = -1;
    glClient = new m.GlClient();
    const initialTime = Date.now();

    function render(){
        window.requestAnimationFrame(render);
        const currentTime = Date.now();

        if(currentTime >= lastDrawTime + FPS_THROTTLE){
            lastDrawTime = currentTime;

            //resize window handler
            if(window.innerHeight != canvas.height || window.innerWidth != canvas.width){
                windowWidth = window.innerWidth - 50;
                canvas.width = windowWidth;
                canvas.clientWidth = windowWidth;
                canvas.style.width = windowWidth;

                windowHeight = window.innerHeight - 200;
                canvas.height = windowHeight;
                canvas.clientHeight = windowHeight;
                canvas.style.height = windowHeight; 


                gl.viewport(0, 0, windowWidth, windowHeight);
            }

            let elapseTime = currentTime - initialTime;
            glClient.update(elapseTime, window.innerWidth,window.innerHeight);
            glClient.render();
        }
    }

    render();
});


// document.getElementById("submit").addEventListener("click", ()=>{
//     var inText = document.getElementById("text").value;
//     wasm.greet(inText);
// }
// );