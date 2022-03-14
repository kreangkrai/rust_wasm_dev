use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

#[global_allocator]
static ALLOC: WeeAlloc = WeeAlloc::INIT;

#[wasm_bindgen]
pub struct Point{
    x:i32,
    y:i32,
}

#[wasm_bindgen]
impl Point {
    #[wasm_bindgen(constructor)]
    pub fn new(x:i32,y:i32)->Point{
        Point{x:x,y:y}
    }
    pub fn getx(&self) -> i32 {
        self.x
    }

    pub fn set_x(&mut self, x: i32) {
        self.x = x;
    }
    
    pub fn gety(&self) -> i32 {
        self.y
    }

    pub fn set_y(&mut self, y: i32) {
        self.y = y;
    }

    pub fn add(&self)-> i32{
        self.x + self.y
    }
    pub fn sub(&self)-> i32{
        self.x - self.y
    }
    pub fn mul(&self)->i32{
        self.x * self.y
    }
}