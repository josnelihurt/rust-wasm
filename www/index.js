import * as wasm from "rust-wasm";

document.getElementById("submit").addEventListener("click", ()=>{
    var inText = document.getElementById("text").value;
    wasm.greet(inText);
}
);