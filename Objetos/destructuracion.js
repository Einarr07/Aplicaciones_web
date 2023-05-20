'use strict';

const producto = {
    tipoVehiculo: "carro",
    marca: "Toyota",
    precio: 3500,
    especificaciones: {
        puertas: "4 puertas",
        todoTerreno: "No cumple",
        capacidad: "Maximo 4 personas"
    }
};

const {tipoVehiculo, marca, precio, especificaciones: { puertas, todoTerreno, capacidad}} = producto;

console.log(`Producto: ${tipoVehiculo} - ${marca}`);
console.log(`Precio: $${precio}`);
console.log(`Especificaciones:
- Nº puertas: ${puertas}
- Todo terreno: ${todoTerreno}
- Capacidad maxima: ${capacidad}`);