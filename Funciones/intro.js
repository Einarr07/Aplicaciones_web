"use strict"

// Función declarada
const radio = 5;

function calcularAreaDeclarada(radio) {
  return Math.PI * radio * radio;
}

console.log(calcularAreaDeclarada(radio)); 


// Función interpretada
const ra = 8;

var calcularAreaInterpretada = function(ra) {
  return Math.PI * ra * ra;
};

console.log(calcularAreaInterpretada(ra));