use wasm_bindgen::JsCast;
use web_sys::WebGlRenderingContext as GL;
use web_sys::*;
use js_sys::WebAssembly;
use super::super::common_fns as cf;

#[allow(dead_code)]
pub struct Color2DGradient {
    program: WebGlProgram,
    color_buffer: WebGlBuffer,
    index_count: i32,
    rect_vertices_buffer: WebGlBuffer,
    u_opacity: WebGlUniformLocation,
    u_transform: WebGlUniformLocation,
}

#[allow(dead_code)]
impl Color2DGradient {
    pub fn new(gl: &WebGlRenderingContext) -> Self {
        let program = cf::link_prg(
            &gl,
            super::super::shaders::vertex::color_2d_gradient::SHADER,
            super::super::shaders::fragment::color_2d_gradient::SHADER,
        ).unwrap();

        let vertices_rect: [f32; 10] = [
            //upper triangle
            0.0, 0.5, // x, y
            1.0, 0.5, // x, y
            0.5, 1.0, // x, y
            //down rectangle
            // 0.0, 0.5, -> index 0 // x, y
            0.0, 0.0, // x, y
            1.0, 0.0, // x, y
            // 1.0, 0.0 -> index 4, // x, y
            // 1.0, 0.5 -> index 1, // x, y
            // 0.0, 0.5, -> index 0 // x, y
        ];

        let indices: [u16; 9] = [
            0,1,2,
            0,3,4,
            4,1,0,
        ];

        let memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()
            .unwrap()
            .buffer();
        let vertices_location = vertices_rect.as_ptr() as u32 / 4;
        let vert_array = js_sys::Float32Array::new(&memory_buffer).subarray(
            vertices_location,
            vertices_location + vertices_rect.len() as u32,
        );
        let buffer_rect = gl.create_buffer().ok_or("failed to create buffer").unwrap();
        gl.bind_buffer(GL::ARRAY_BUFFER, Some(&buffer_rect));
        gl.buffer_data_with_array_buffer_view(GL::ARRAY_BUFFER, &vert_array, GL::STATIC_DRAW);

        let indices_mem_buffer = wasm_bindgen::memory()
                                            .dyn_into::<WebAssembly::Memory>()
                                            .unwrap()
                                            .buffer();
        let indices_location = indices.as_ptr() as u32 / 2;
        let indices_array = js_sys::Uint16Array::new(&indices_mem_buffer)
        .subarray(
            indices_location,
            indices_location + indices.len() as u32,
        );
        let buffer_indices = gl.create_buffer().unwrap();
        gl.bind_buffer(GL::ELEMENT_ARRAY_BUFFER, Some(&buffer_indices));
        gl.buffer_data_with_array_buffer_view(
            GL::ELEMENT_ARRAY_BUFFER,
            &indices_array,
            GL::STATIC_DRAW);

        Self {
            index_count: indices_array.length() as i32,
            u_opacity: gl.get_uniform_location(&program, "uOpacity").unwrap(),
            u_transform: gl.get_uniform_location(&program, "uTransform").unwrap(),
            rect_vertices_buffer: buffer_rect,
            color_buffer: gl.create_buffer().ok_or("error creating color buffer").unwrap(),
            program: program,
        }
    }

    pub fn render(
        &self,
        gl: &WebGlRenderingContext,
        bottom: f32,
        top: f32,
        left: f32,
        right: f32,
        canvas_width: f32,
        canvas_height: f32,
    ) {
        gl.use_program(Some(&self.program));

        gl.bind_buffer(GL::ARRAY_BUFFER, Some(&self.rect_vertices_buffer));
        gl.vertex_attrib_pointer_with_i32(0, 2, GL::FLOAT, false, 0, 0);
        gl.enable_vertex_attrib_array(0);

        gl.bind_buffer(GL::ARRAY_BUFFER, Some(&self.color_buffer));
        gl.vertex_attrib_pointer_with_i32(1, 4, GL::FLOAT, false, 0, 0);
        gl.enable_vertex_attrib_array(1);

        //This should be as many vertex you have, each one must have a color
        let colors: [f32; 20] = [
            1., 0., 0., 0.8, //rgba
            0., 1., 0., 0.9, //rgba
            1., 1., 0., 0.9, //rgba
            1., 0., 1., 0.9, //rgba
            0., 1., 1., 0.9, //rgba
        ];

        let color_memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()
            .unwrap()
            .buffer();
        let colors_location = colors.as_ptr() as u32 / 4;
        let colors_array = js_sys::Float32Array::new(&color_memory_buffer)
            .subarray(
                colors_location, 
                colors_location + colors.len() as u32, 
            );

        gl.buffer_data_with_array_buffer_view(GL::ARRAY_BUFFER, &colors_array, GL::DYNAMIC_DRAW);
        
        gl.uniform1f(Some(&self.u_opacity), 1.);


        let translation_mat = cf::translation_matrix(
            2. * left / canvas_width - 1.,
            2. * bottom / canvas_height - 1.,
            0.,
        );

        let scale_mat = cf::scaling_matrix(
            2. * (right - left) / canvas_width,
            2. * (top - bottom) / canvas_height,
            0.,
        );

        let transform_mat = cf::mult_matrix_4(scale_mat, translation_mat);
        gl.uniform_matrix4fv_with_f32_array(Some(&self.u_transform), false, &transform_mat);
        
        gl.draw_elements_with_i32(GL::TRIANGLES, self.index_count, GL::UNSIGNED_SHORT, 0);
    }
}