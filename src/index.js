import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import './index.css';
// import PrimerApp from "./PrimeraApp";



const divRoot = document.querySelector('#app');


//  ReactDOM.render( <PrimerApp  saludo ="Hola, soy Goku" /> , divRoot);
ReactDOM.render( < CounterApp   /> , divRoot);

