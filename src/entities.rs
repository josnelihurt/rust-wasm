extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
#[derive(Debug, Copy, Clone)]
pub struct Color{
    pub R: u8,
    pub G: u8,
    pub B: u8,
}

#[wasm_bindgen]
impl Color {
    #[wasm_bindgen(constructor)]
    pub fn new(r:u8, g:u8, b:u8) -> Self{
        Self{
            R: r,
            G: g,
            B: b,
        }
    }
}