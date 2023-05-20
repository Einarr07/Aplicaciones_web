'use strict';

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  genero: "Realismo mágico",
  publicacion: 1967,
  editorial: "Sudamericana",
  paginas: 432,
  dueño (){
    return `El autor de ${this.titulo} es ${this.autor}`;
  }
};

console.log(libro.dueño());
