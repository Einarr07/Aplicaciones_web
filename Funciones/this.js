'use strict';

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Plateado",
    transmision: "Automática",
    precio: 25000,
    mostrarInformacion: function() {
      setTimeout(() => {
        console.log(`Este es un ${this.marca} ${this.modelo} del año ${this.año}.`);
        console.log(`Color: ${this.color}`);
        console.log(`Transmisión: ${this.transmision}`);
        console.log(`Precio: $${this.precio}`);
      }, 1000);
    }
  };
  
  carro.mostrarInformacion();
  
  