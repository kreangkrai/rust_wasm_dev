import init ,{Point} from "rust-wasm-dev"
var React = require('react');
init().then(_ =>{
    getData('http://127.0.0.1:8082/datas' )
    .then(data => {
     
      const point = new Point(data[0].value,data[1].value);
      const add = point.add();
      console.log(add);
    })
    .catch(e =>{
      console.log(e);
    });

});

async function getData(url = '') {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',      
      },
    });
    return response.json();
  }