"use strict";

function obtenerTemperatura(ciudad) {
    return new Promise((resolve, reject) => {
      // Simulamos una solicitud a una API que devuelve la temperatura de una ciudad
      setTimeout(() => {
        const temperatura = Math.random() * 55; // Temperatura aleatoria entre 0 y 30 grados
        if (temperatura < 20) {
          reject('Error: No se pudo obtener la temperatura');
        } else {
          resolve(temperatura);
        }
      }, 2000); // Simulamos un retraso de 2 segundos en la respuesta
    });
  }
  
  function mostrarTemperatura(ciudad) {
    obtenerTemperatura(ciudad)
      .then(temperatura => {
        console.log(`La temperatura actual en ${ciudad} es ${temperatura} grados Celsius.`);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  mostrarTemperatura('Quito');
  mostrarTemperatura('Londres');
  mostrarTemperatura('Nueva York');
  mostrarTemperatura('Cuenca');
  