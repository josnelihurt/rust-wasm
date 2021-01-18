use wasm_bindgen::JsCast;
use wasm_bindgen::JsValue;
use web_sys::*;
use web_sys::WebGlRenderingContext as Gl;

pub fn init_webgl_ctx(canvas_name : &str) -> Result<WebGlRenderingContext,JsValue>{
    let wnd = window().unwrap();
    let doc = wnd.document().unwrap();
    let canvas = doc.get_element_by_id(canvas_name).unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>()?;
    let gl: WebGlRenderingContext = canvas.get_context("webgl")?.unwrap().dyn_into()?;
    
    //Set gl options
    gl.enable(Gl::BLEND);
    gl.blend_func(Gl::SRC_ALPHA, Gl::ONE_MINUS_SRC_ALPHA);
    gl.clear_color(0.,0.,0.,1.); // rgba
    gl.clear_depth(1.);

    Ok(gl)
}