'use strict';

const obtenerSaludo = function() {
    const horaActual = new Date().getHours();
  
    if (horaActual >= 5 && horaActual < 12) {
      return "Buenos días";
    } else if (horaActual >= 12 && horaActual < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
};
  
const saludo = obtenerSaludo();
console.log(saludo); 
  