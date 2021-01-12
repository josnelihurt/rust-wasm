use std::sync::Arc;
use std::sync::Mutex;

lazy_static! {
    //many read only copies, update is not mutating the data is replacing the whole data
    static ref APP_STATE: Mutex<Arc<AppState>> = Mutex::new(Arc::new(AppState::new()))
}

pub fn update_dynamic_data(time: f32, canvas_width: f32, canvas_hight: f32){
    let mut data = APPP_STATE.lock().unwrap();

    *data = Arc::new(AppState{

    })
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
