'use strict';

function publicarMensajeEnPerfil(usuario, mensaje) {
    console.log(`[${usuario}]: ${mensaje}`);
};
  
  const usuario1 = "JohnDoe";
  const mensaje1 = "¡Hola a todos! Estoy emocionado de unirme a esta comunidad.";
  
  const usuario2 = "JaneSmith";
  const mensaje2 = "Feliz cumpleaños a mi querida amiga, María. Que tengas un día maravilloso.";
  
  publicarMensajeEnPerfil(usuario1, mensaje1); 
  publicarMensajeEnPerfil(usuario2, mensaje2); 
  