'use strict';

const producto = {
  nombre: "Smartphone",
  marca: "Samsung",
  precio: 500
};

// Congelar el objeto producto
Object.freeze(producto);

// Intentar modificar el objeto congelado
producto.precio = 600; 

//Al congelarlo no se puede hacer cambios, es por eso que soltara un error en consola
console.log(producto); 
