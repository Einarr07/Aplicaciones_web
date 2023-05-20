'use strict';

const producto = {
  nombre: "Smartphone",
  marca: "Samsung",
  precio: 500
};

const cliente = {
  nombre: "Juan",
  edad: 30,
  direccion: "Calle New York"
};

const infoCompleta = {...producto, ...cliente};

console.log(infoCompleta)
