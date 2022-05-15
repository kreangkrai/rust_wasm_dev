
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Calc{}
#[wasm_bindgen]
impl Calc{
    pub fn fibo_r(n:usize)->i64{
        match n{
            0 => 0,
            1 => 1,
            _ =>  Calc::fibo_r(n-1) + Calc::fibo_r(n-2),
        }  
    }
    pub fn fibo_d(n:usize)->i64{
        let mut f: Vec<i64> = vec![0;n+2];
        f[0] = 0;
        f[1] = 1;
        for i in 2..=n{
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
}

#[cfg(test)]
mod tests{
    use crate::calc::{fibo::Calc};
    #[test]
    fn main_test() {
        assert_eq!(Calc::fibo_r(0),0);
        assert_eq!(Calc::fibo_r(1),1);
        assert_eq!(Calc::fibo_r(2),1);
        assert_eq!(Calc::fibo_r(10),55);
        assert_eq!(Calc::fibo_r(11),89);

        assert_eq!(Calc::fibo_d(0),0);
        assert_eq!(Calc::fibo_d(1),1);
        assert_eq!(Calc::fibo_d(2),1);
        assert_eq!(Calc::fibo_d(10),55);
        assert_eq!(Calc::fibo_d(11),89);
    }
}

