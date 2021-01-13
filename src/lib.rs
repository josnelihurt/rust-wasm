extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use web_sys::*;
use web_sys::WebGlRenderingContext as Gl;
use std::fmt;

#[macro_use]
extern crate lazy_static;

mod app_state;
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
    
    pub fn update(&mut self, time: f32, width: f32, height: f32) -> Result<(), JsValue>{
        log(format!("{} update width {} height {}", time, width, height).as_str());
        app_state::update_dynamic_data(time, width, height);
        Ok(())
    }

    pub fn render(&self){
        self.gl.clear(Gl::COLOR_BUFFER_BIT | Gl::COLOR_BUFFER_BIT);

        let current_state = app_state::get_current_state();

        self.prg_color_2d.render( 
                &self.gl,
                current_state.control_bottom,
                // 0.,
                current_state.control_top,
                current_state.control_left,
                current_state.control_right,
                // 12.,
                current_state.canvas_width,
                current_state.canvas_height,
        );
    }
}