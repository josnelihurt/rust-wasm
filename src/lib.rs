extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(msg: &str) {
    let alert_msg = "message => ".to_owned() + msg;
    alert(&alert_msg);
}
