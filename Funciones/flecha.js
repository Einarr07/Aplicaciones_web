'use strict';

const calcularImpuesto = (cantidad) => cantidad * 0.1;

const precioProducto = 100;
const impuesto = calcularImpuesto(precioProducto);

console.log(`El impuesto sobre el producto es: ${impuesto}`); 
