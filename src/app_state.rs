use std::sync::Arc;
use std::sync::Mutex;

lazy_static! {
    //many read only copies, update is not mutating the data is replacing the whole data
    static ref APP_STATE: Mutex<Arc<AppState>> = Mutex::new(Arc::new(AppState::new()));
}

pub fn update_dynamic_data(time: f32, canvas_width: f32, canvas_hight: f32){
    let mut data = APP_STATE.lock().unwrap();

    *data = Arc::new(AppState{
        canvas_width: canvas_width,
        canvas_height: canvas_hight,
        time: time,
        ..*data.clone()
    })
}

pub fn get_current_state() -> Arc<AppState> {
    APP_STATE.lock().unwrap().clone()
}

pub struct AppState{
    pub canvas_width: f32,
    pub canvas_height: f32,
    pub time: f32,
}

impl AppState {
    fn new() -> Self{
        Self{
            canvas_width: 0.,
            canvas_height: 0.,
            time: 0.,
        }
    }
}
