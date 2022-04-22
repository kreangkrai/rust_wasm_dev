import init ,{Point} from "rust-wasm-dev"
var React = require('react');
init().then(_ =>{
    const point = new Point(3,4);

    const add = point.mul();

    console.log(add);
    //getapi();

});

// async function getapi() {
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrcmlhbmdrcmFpQGdtYWlsLmNvbSIsIm5hbWUiOiJrcmlhbmdrcmFpIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjUwNDI1MDYzMTA3LCJleHAiOjE2NTMwMTcwNjMxMDd9.Ndbx0Ou1MDhfPFyypQVxwBRtbJI4lkvN7jYZHv4mpqI';
//     const response = await fetch("http://localhost:8082/products",{
//         method: "GET",
//         mode: 'no-cors',
//         headers: new Headers({
//             'Content-Type' : 'applications/json',
//             'Authorization' : `Bearer ${token}`
//         })
//     });
//     var data = await response.json();
//     console.log(data);
// }