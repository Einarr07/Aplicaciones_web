'use strict';

const canasta = ["Manzana", "Pera", "Naranja", "Sandia", { cantidad: [15, 25, 35, 45] },
["Carmen", "Jorge", "Ricardo", "Estefania"]];

const frutas = canasta[4];
const cantidad = frutas.cantidad[3];

console.log(`La cantidad de sandias que hay en la canasta son ${cantidad}`);

const dueño = canasta[5];
const nombre = dueño[2];

console.log(`El dueño de las sandias es: ${nombre}`);



