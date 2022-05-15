import init ,{Point,Calc} from "rust-wasm-dev"
//var React = require('react');
init().then(_ =>{

  const fibo = Calc.fibo_d(164);
  document.getElementById("text1").innerHTML = fibo;
  
})
.catch(e => {
  console.log(e);
});


// init().then(_ =>{
//     getData('http://127.0.0.1:8082/log_datas/20208' )
//     .then(data => {
     
//       const point = new Point(data[0].value,data[1].value);
//       const add = point.add();

//       const fibo = Calc.fibo_d(164);
//       document.getElementById("text1").innerHTML = fibo;
//     })
//     .catch(e =>{
//       console.log(e);
//     });

// });

// async function getData(url = '') {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',      
//       },
//     });
//     return response.json();
//   }