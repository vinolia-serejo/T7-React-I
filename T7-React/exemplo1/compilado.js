"use strict";

console.log('app carregado');
var app = document.getElementById('app'); // const template = `<h1>React na Reprograma, na ${a}</h1>`

var template = React.createElement("h1", null, "socorro meu deus");
ReactDOM.render(template, app);
