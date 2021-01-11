extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

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

}

#[wasm_bindgen]
impl GlClient{
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self{
        log("New GlClient");
        Self {}
    }
    
    pub fn update(&mut self, _time: f32, _width: f32, _height: f32) -> Result<(), JsValue>{
        // log("update");
        Ok(())
    }

    pub fn render(&self){
        // log("render");
    }
}