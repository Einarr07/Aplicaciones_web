'use strict';

const listaCompras = ["manzanas", "pan", "leche", "huevos", "arroz"];

console.log("Lista de compras:");

for (let item of listaCompras) {
    console.log(item);
}

console.log(`En tu lista de compra tienes ${listaCompras.length} productos`);
