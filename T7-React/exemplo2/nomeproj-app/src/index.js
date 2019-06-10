import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';arquivo que deletei
import * as serviceWorker from './serviceWorker';

let contadorNum = 780;

const nome = {
    primeiroNome: "Vinolia",
    sobreNome:"Serejo"
}

function nomeCompleto(nome){
    return nome.primeiroNome + '' + nome.sobreNome;
}
const template = 
                <div className="contador">
                    <h1>Count: {contadorNum}</h1>
                    <h1>Oi {nome.primeiroNome}</h1>
                    <h1>Olá {nomeCompleto(nome)}</h1>
                    <button>+1</button>
                    <button>-1</button>
                    <button>reset</button>

                 </div>


ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
