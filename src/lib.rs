extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use web_sys::*;
use web_sys::WebGlRenderingContext as Gl;

mod gl_setup;
mod webgl_prg;
mod shaders;
mod common_fns;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet(msg: &str) {
    let alert_msg = "message => ".to_owned() + msg;
    alert(&alert_msg);
}
#[wasm_bindgen]
pub struct GlClient {
    prg_color_2d: webgl_prg::Color2D,
    gl: WebGlRenderingContext,
}

#[wasm_bindgen]
impl GlClient{
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self{
        log("New GlClient");
        console_error_panic_hook::set_once();
        let gl = gl_setup::init_webgl_ctx().unwrap();
        Self {
            prg_color_2d: webgl_prg::Color2D::new(&gl),
            gl: gl,
        }
    }
    
    pub fn update(&mut self, _time: f32, _width: f32, _height: f32) -> Result<(), JsValue>{
        // log("update");
        Ok(())
    }

    pub fn render(&self){
        self.gl.clear(Gl::COLOR_BUFFER_BIT | Gl::COLOR_BUFFER_BIT);

        self.prg_color_2d.render(&self.gl, 
            0.0, 10.0, 0.0, 10.0, 
            10.0, 10.0);
    }
}