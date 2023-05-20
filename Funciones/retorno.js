'use strict';

function verificarEstadoTarea(estado) {
    if (estado) {
      return "Se a completado la tarea";
    } else {
      return "Aun NO has terminado tus deberes";
    }
  }
  
  const tarea1 = true;
  const tarea2 = false;
  
  const estadoTarea1 = verificarEstadoTarea(tarea1);
  console.log(estadoTarea1); 
  
  const estadoTarea2 = verificarEstadoTarea(tarea2);
  console.log(estadoTarea2); 
  