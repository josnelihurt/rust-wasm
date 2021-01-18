(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greet", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlClient", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateData", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_alert_05ff6c01ba361cb3", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_313ca29323d18c60", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_569d7454c64f6dbe", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_49f532f06a9786ee", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_c0366b39e4f4c89a", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementById_15aef17a620252b4", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bufferData_dc5899657e9f1803", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniformMatrix4fv_088c96db8ee28c1d", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_attachShader_0dd248f6ab98fcf2", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_bindBuffer_1ceb83e9674e812a", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_blendFunc_34a6bb31770822c5", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clear_f6b2dd48aeed2752", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearColor_89f7819aa9f80129", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearDepth_b30037e22dd5f0aa", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_compileShader_28bdbafe4445d24b", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_acedc3831832a280", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createProgram_7e2f44b7b74694d4", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShader_64c474f1d1d0c1f8", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawArrays_604abf0ccb310fe7", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_drawElements_3eb5ba8a511ce0f0", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enable_87f39f6396535e1f", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramInfoLog_aacf06c959070653", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getProgramParameter_a89bf14502c109f7", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderInfoLog_1eb885f2468e2429", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getShaderParameter_99510442d33c6589", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUniformLocation_ca853de4f2f9270d", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_linkProgram_46a36cb158f10676", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shaderSource_700ae72fca39850d", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform1f_3eb09312a513b94a", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_uniform4f_df665e266e041cad", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_useProgram_d63a57db0571e803", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_vertexAttribPointer_b4b829a4f5a3778e", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_3db9399e6dc524ff", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_951bd0c6d815d6f1", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_7c6bd521992b4022", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_6baf3a3aa7b63415", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_63fc4027b66c265b", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_513fb247e8e4e6d2", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_b87245cd886d7113", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_3f12a1c608c6d04e", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_f2849e182c7f66a6", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_851408fa8e0911c6", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_2863e4d532e8dfb4", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_subarray_15d0671062f0cfb3", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_subarray_f5deb93e9cb33975", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Memory_fdb0928d3f70cd49", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_boolean_get", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return _rust_wasm_demo_bg_js__WEBPACK_IMPORTED_MODULE_0__["db"]; });




/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(TextEncoder, module, TextDecoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return greet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GlClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UpdateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __wbg_alert_05ff6c01ba361cb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __wbg_log_313ca29323d18c60; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __wbg_error_569d7454c64f6dbe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __wbg_instanceof_Window_49f532f06a9786ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __wbg_document_c0366b39e4f4c89a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __wbg_getElementById_15aef17a620252b4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __wbg_bufferData_dc5899657e9f1803; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __wbg_uniformMatrix4fv_088c96db8ee28c1d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __wbg_attachShader_0dd248f6ab98fcf2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __wbg_bindBuffer_1ceb83e9674e812a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __wbg_blendFunc_34a6bb31770822c5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __wbg_clear_f6b2dd48aeed2752; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __wbg_clearColor_89f7819aa9f80129; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __wbg_clearDepth_b30037e22dd5f0aa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __wbg_compileShader_28bdbafe4445d24b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __wbg_createBuffer_acedc3831832a280; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __wbg_createProgram_7e2f44b7b74694d4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __wbg_createShader_64c474f1d1d0c1f8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __wbg_drawArrays_604abf0ccb310fe7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __wbg_drawElements_3eb5ba8a511ce0f0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __wbg_enable_87f39f6396535e1f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __wbg_enableVertexAttribArray_f29c8dde9c8c5cf5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __wbg_getProgramInfoLog_aacf06c959070653; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __wbg_getProgramParameter_a89bf14502c109f7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __wbg_getShaderInfoLog_1eb885f2468e2429; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __wbg_getShaderParameter_99510442d33c6589; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __wbg_getUniformLocation_ca853de4f2f9270d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __wbg_linkProgram_46a36cb158f10676; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __wbg_shaderSource_700ae72fca39850d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __wbg_uniform1f_3eb09312a513b94a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __wbg_uniform4f_df665e266e041cad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __wbg_useProgram_d63a57db0571e803; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __wbg_vertexAttribPointer_b4b829a4f5a3778e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __wbg_getContext_3db9399e6dc524ff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __wbg_call_951bd0c6d815d6f1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __wbg_newnoargs_7c6bd521992b4022; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __wbg_self_6baf3a3aa7b63415; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __wbg_window_63fc4027b66c265b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __wbg_globalThis_513fb247e8e4e6d2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __wbg_global_b87245cd886d7113; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __wbg_buffer_3f12a1c608c6d04e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __wbg_length_f2849e182c7f66a6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __wbg_new_851408fa8e0911c6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __wbg_new_2863e4d532e8dfb4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __wbg_subarray_15d0671062f0cfb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __wbg_subarray_f5deb93e9cb33975; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __wbg_instanceof_Memory_fdb0928d3f70cd49; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return __wbindgen_boolean_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return __wbindgen_memory; });
/* harmony import */ var _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"].buffer);
    }
    return cachegetUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"].buffer);
    }
    return cachegetInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* @param {string} msg
*/
function greet(msg) {
    var ptr0 = passStringToWasm0(msg, _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "D"], _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "E"]);
    var len0 = WASM_VECTOR_LEN;
    _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* greet */ "J"](ptr0, len0);
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"].buffer) {
        cachegetFloat32Memory0 = new Float32Array(_rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"].buffer);
    }
    return cachegetFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_exn_store */ "B"](addHeapObject(e));
        }
    };
}
/**
*/
class Color {

    static __wrap(ptr) {
        const obj = Object.create(Color.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_color_free */ "a"](ptr);
    }
    /**
    * @returns {number}
    */
    get R() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_color_R */ "d"](this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set R(arg0) {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_color_R */ "q"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get G() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_color_G */ "c"](this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set G(arg0) {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_color_G */ "p"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get B() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_color_B */ "b"](this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set B(arg0) {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_color_B */ "o"](this.ptr, arg0);
    }
    /**
    * @param {number} r
    * @param {number} g
    * @param {number} b
    */
    constructor(r, g, b) {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* color_new */ "F"](r, g, b);
        return Color.__wrap(ret);
    }
}
/**
*/
class GlClient {

    static __wrap(ptr) {
        const obj = Object.create(GlClient.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_glclient_free */ "n"](ptr);
    }
    /**
    */
    constructor() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* glclient_new */ "G"]();
        return GlClient.__wrap(ret);
    }
    /**
    * @param {UpdateData} data
    */
    update(data) {
        _assertClass(data, UpdateData);
        var ptr0 = data.ptr;
        data.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* glclient_update */ "I"](this.ptr, ptr0);
    }
    /**
    */
    render() {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* glclient_render */ "H"](this.ptr);
    }
}
/**
*/
class UpdateData {

    static __wrap(ptr) {
        const obj = Object.create(UpdateData.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_updatedata_free */ "A"](ptr);
    }
    /**
    * @returns {number}
    */
    get time() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_time */ "k"](this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set time(arg0) {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_time */ "x"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get width() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_width */ "m"](this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set width(arg0) {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_width */ "z"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get height() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_height */ "j"](this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set height(arg0) {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_height */ "w"](this.ptr, arg0);
    }
    /**
    * @returns {Color}
    */
    get triangle_color() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_triangle_color */ "l"](this.ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} arg0
    */
    set triangle_color(arg0) {
        _assertClass(arg0, Color);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_triangle_color */ "y"](this.ptr, ptr0);
    }
    /**
    * @returns {Color}
    */
    get gradient0() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_gradient0 */ "e"](this.ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} arg0
    */
    set gradient0(arg0) {
        _assertClass(arg0, Color);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_gradient0 */ "r"](this.ptr, ptr0);
    }
    /**
    * @returns {Color}
    */
    get gradient1() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_gradient1 */ "f"](this.ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} arg0
    */
    set gradient1(arg0) {
        _assertClass(arg0, Color);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_gradient1 */ "s"](this.ptr, ptr0);
    }
    /**
    * @returns {Color}
    */
    get gradient2() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_gradient2 */ "g"](this.ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} arg0
    */
    set gradient2(arg0) {
        _assertClass(arg0, Color);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_gradient2 */ "t"](this.ptr, ptr0);
    }
    /**
    * @returns {Color}
    */
    get gradient3() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_gradient3 */ "h"](this.ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} arg0
    */
    set gradient3(arg0) {
        _assertClass(arg0, Color);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_gradient3 */ "u"](this.ptr, ptr0);
    }
    /**
    * @returns {Color}
    */
    get gradient4() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_get_updatedata_gradient4 */ "i"](this.ptr);
        return Color.__wrap(ret);
    }
    /**
    * @param {Color} arg0
    */
    set gradient4(arg0) {
        _assertClass(arg0, Color);
        var ptr0 = arg0.ptr;
        arg0.ptr = 0;
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbg_set_updatedata_gradient4 */ "v"](this.ptr, ptr0);
    }
    /**
    */
    constructor() {
        var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* updatedata_new */ "L"]();
        return UpdateData.__wrap(ret);
    }
}

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbg_alert_05ff6c01ba361cb3 = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

const __wbg_log_313ca29323d18c60 = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
};

const __wbg_error_569d7454c64f6dbe = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_free */ "C"](arg0, arg1);
    }
};

const __wbg_instanceof_Window_49f532f06a9786ee = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

const __wbg_document_c0366b39e4f4c89a = function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_getElementById_15aef17a620252b4 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85 = function(arg0) {
    var ret = getObject(arg0) instanceof WebGLRenderingContext;
    return ret;
};

const __wbg_bufferData_dc5899657e9f1803 = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
};

const __wbg_uniformMatrix4fv_088c96db8ee28c1d = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
};

const __wbg_attachShader_0dd248f6ab98fcf2 = function(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
};

const __wbg_bindBuffer_1ceb83e9674e812a = function(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
};

const __wbg_blendFunc_34a6bb31770822c5 = function(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
};

const __wbg_clear_f6b2dd48aeed2752 = function(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
};

const __wbg_clearColor_89f7819aa9f80129 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
};

const __wbg_clearDepth_b30037e22dd5f0aa = function(arg0, arg1) {
    getObject(arg0).clearDepth(arg1);
};

const __wbg_compileShader_28bdbafe4445d24b = function(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
};

const __wbg_createBuffer_acedc3831832a280 = function(arg0) {
    var ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_createProgram_7e2f44b7b74694d4 = function(arg0) {
    var ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_createShader_64c474f1d1d0c1f8 = function(arg0, arg1) {
    var ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_drawArrays_604abf0ccb310fe7 = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
};

const __wbg_drawElements_3eb5ba8a511ce0f0 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
};

const __wbg_enable_87f39f6396535e1f = function(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
};

const __wbg_enableVertexAttribArray_f29c8dde9c8c5cf5 = function(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
};

const __wbg_getProgramInfoLog_aacf06c959070653 = function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "D"], _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "E"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_getProgramParameter_a89bf14502c109f7 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

const __wbg_getShaderInfoLog_1eb885f2468e2429 = function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "D"], _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "E"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_getShaderParameter_99510442d33c6589 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

const __wbg_getUniformLocation_ca853de4f2f9270d = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_linkProgram_46a36cb158f10676 = function(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
};

const __wbg_shaderSource_700ae72fca39850d = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
};

const __wbg_uniform1f_3eb09312a513b94a = function(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
};

const __wbg_uniform4f_df665e266e041cad = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
};

const __wbg_useProgram_d63a57db0571e803 = function(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
};

const __wbg_vertexAttribPointer_b4b829a4f5a3778e = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
};

const __wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3 = function(arg0) {
    var ret = getObject(arg0) instanceof HTMLCanvasElement;
    return ret;
};

const __wbg_getContext_3db9399e6dc524ff = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_call_951bd0c6d815d6f1 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

const __wbg_newnoargs_7c6bd521992b4022 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_self_6baf3a3aa7b63415 = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

const __wbg_window_63fc4027b66c265b = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

const __wbg_globalThis_513fb247e8e4e6d2 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

const __wbg_global_b87245cd886d7113 = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

const __wbg_buffer_3f12a1c608c6d04e = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

const __wbg_length_f2849e182c7f66a6 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

const __wbg_new_851408fa8e0911c6 = function(arg0) {
    var ret = new Uint16Array(getObject(arg0));
    return addHeapObject(ret);
};

const __wbg_new_2863e4d532e8dfb4 = function(arg0) {
    var ret = new Float32Array(getObject(arg0));
    return addHeapObject(ret);
};

const __wbg_subarray_15d0671062f0cfb3 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

const __wbg_subarray_f5deb93e9cb33975 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

const __wbg_instanceof_Memory_fdb0928d3f70cd49 = function(arg0) {
    var ret = getObject(arg0) instanceof WebAssembly.Memory;
    return ret;
};

const __wbindgen_boolean_get = function(arg0) {
    const v = getObject(arg0);
    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_malloc */ "D"], _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* __wbindgen_realloc */ "E"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const __wbindgen_memory = function() {
    var ret = _rust_wasm_demo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "K"];
    return addHeapObject(ret);
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)["TextEncoder"], __webpack_require__(12)(module), __webpack_require__(8)["TextDecoder"], __webpack_require__(13)))

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(7);


// exec wasm module
wasmExports["M"]()

/***/ })

}]);