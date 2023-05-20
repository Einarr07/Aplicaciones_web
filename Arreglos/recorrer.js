'use strict';

const calificaciones = [80, 45, 70, 60, 67, 82, 66, 57, 100];

calificaciones.forEach(function(calificacion) {
  if (calificacion >= 70) {
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }
});
