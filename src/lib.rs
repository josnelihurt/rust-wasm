extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use web_sys::*;
use web_sys::WebGlRenderingContext as Gl;

#[macro_use]
extern crate lazy_static;

mod app_state;
mod common_fns;
mod entities;
mod gl_setup;
mod shaders;
mod webgl_prg;

use entities::Color;

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
pub struct UpdateData {
    pub time: f32,
    pub width: f32,
    pub height: f32,
    pub triangle_color: Color,
    pub gradient0: Color,
    pub gradient1: Color,
    pub gradient2: Color,
    pub gradient3: Color,
    pub gradient4: Color,
}

#[wasm_bindgen]
impl UpdateData {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self{
        let defaultColor : Color = Color{R:0,G:0,B:0};
        Self{
            time: 0.,
            width: 0.,
            height: 0.,
            triangle_color: defaultColor,
            gradient0: defaultColor,
            gradient1: defaultColor,
            gradient2: defaultColor,
            gradient3: defaultColor,
            gradient4: defaultColor,
        }
    }
}

#[wasm_bindgen]
pub struct GlClient {
    data: UpdateData,
    prg_color_2d: webgl_prg::Color2D,
    prg_color_2d_gradient: webgl_prg::Color2DGradient,
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
            data: UpdateData::new(),
            prg_color_2d: webgl_prg::Color2D::new(&gl),
            prg_color_2d_gradient: webgl_prg::Color2DGradient::new(&gl),
            gl: gl,
        }
    }
    
    pub fn update(&mut self, data: UpdateData) -> Result<(), JsValue>{
        // log(format!("{} update width {} height {}", time, width, height).as_str());
        app_state::update_dynamic_data(data.time, data.width, data.height);
        self.data = data;
        Ok(())
    }

    pub fn render(&self){
        self.gl.clear(Gl::COLOR_BUFFER_BIT | Gl::COLOR_BUFFER_BIT);

        let current_state = app_state::get_current_state();

        self.prg_color_2d.render( 
                &self.gl,
                current_state.control_bottom,
                current_state.control_top,
                current_state.control_left,
                current_state.control_right,
                current_state.canvas_width,
                current_state.canvas_height,
                self.data.triangle_color,
                // Color::new(100,100,100),
            );
        let gradients: [Color; 5] = [
            self.data.gradient0,
            self.data.gradient1,
            self.data.gradient2,
            self.data.gradient3,
            self.data.gradient4,
            ];
        self.prg_color_2d_gradient.render(
                &self.gl,
                current_state.control_bottom,
                current_state.control_top,
                current_state.control_left,
                current_state.control_right,
                current_state.canvas_width,
                current_state.canvas_height,
                gradients,
        );
    }
}