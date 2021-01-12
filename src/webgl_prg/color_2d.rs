use wasm_bindgen::JsCast;
use web_sys::WebGlRenderingContext as Gl;
use web_sys::*;
use js_sys::WebAssembly;
use super::super::common_fns as cf;

pub struct Color2D{
    u_color: WebGlUniformLocation,
    u_opacity: WebGlUniformLocation,
    u_transform: WebGlUniformLocation,
    vertex_len: usize,
    program: WebGlProgram,
    drawable_obj: WebGlBuffer,
}

impl Color2D {
    pub fn new( gl: &WebGlRenderingContext,) -> Self {
        let prg = cf::link_prg(
            &gl, 
            super::super::shaders::vertex::color_2d::SHADER, 
            super::super::shaders::fragment::color_2d::SHADER
        ).unwrap();

        let points : [f32; 6] = [
            -0.5, 0.5, //x,y
            0.0, -0.5,
            0.5, 0.5,
        ];

        let mem_buf = wasm_bindgen::memory()
                    .dyn_into::<WebAssembly::Memory>()
                    .unwrap()
                    .buffer();

        let points_location = points.as_ptr() as u32 / 4;
        let vertex_js_array = js_sys::Float32Array::new(&mem_buf)
                                .subarray(
                                    points_location,
                                    points_location + points.len() as u32,
                                );
        let glBuf =  gl.create_buffer().ok_or("Unable to create gl buffer").unwrap();
        gl.bind_buffer(Gl::ARRAY_BUFFER, Some(&glBuf));
        gl.buffer_data_with_array_buffer_view(Gl::ARRAY_BUFFER, 
            &vertex_js_array,
            Gl::STATIC_DRAW);

        Self{
            u_color: gl.get_uniform_location(&prg, "uColor").unwrap(),
            u_opacity: gl.get_uniform_location(&prg, "uOpacity").unwrap(),
            u_transform: gl.get_uniform_location(&prg, "uTransform").unwrap(),
            vertex_len: points.len(),
            drawable_obj: glBuf,
            program: prg,
        }       
    }
    pub fn render(&self, 
        gl: &WebGlRenderingContext, 
        bottom: f32, top: f32, left: f32, right: f32, 
        canvas_width: f32, canvas_height: f32,
        ){
            gl.use_program(Some(&self.program));
            gl.bind_buffer(Gl::ARRAY_BUFFER, Some(&self.drawable_obj));
            gl.vertex_attrib_pointer_with_i32(0, 2, Gl::FLOAT, false, 0, 0);
            gl.enable_vertex_attrib_array(0);

            gl.uniform4f(
                Some(&self.u_color),
                0., //r
                0.5,//g
                0.,//b
                1.,//a
            );

            gl.uniform1f(Some(&self.u_opacity), 1.);

            let translation_matrix = cf::translation_matrix(
                2. * left / canvas_width - 1., 
                2. * bottom / canvas_height - 1., 
                0.);
            
            let scale_matrix = cf::scaling_matrix(
                2. * (left-right) / canvas_width, 
                2. * (top-bottom) / canvas_height,
                0. ,
            );

            let transform_matrix = cf::mult_matrix_4(
                scale_matrix,
                 translation_matrix);
            gl.uniform_matrix4fv_with_f32_array(
                Some(&self.u_transform),
                false,
                &transform_matrix);

            gl.draw_arrays(Gl::TRIANGLES, 0, (self.vertex_len / 2) as i32);
        }
}