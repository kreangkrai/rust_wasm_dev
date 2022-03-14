import init ,{Point} from "rust-wasm-dev"

init().then(_ =>{
    const point = new Point(3,4);

    const add = point.add();

    console.log(add);

});