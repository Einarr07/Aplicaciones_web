'use strict';

const canasta = ["Manzana", "Pera", "Naranja", "Sandia", { cantidad: [15, 25, 35, 45] }];
const dueños = ["Carmen", "Jorge", "Ricardo", "Estefania"];

const datosCompletos = [...canasta, ...dueños];

console.log(datosCompletos);