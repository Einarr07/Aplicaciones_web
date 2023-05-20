'use strict';

const biblioteca = {
  nombre: "Mi Biblioteca",
  ubicacion: "calle new york",
  libros: [],
  agregarLibro: function(titulo, autor, genero) {
    const nuevoLibro = {
      titulo: titulo,
      autor: autor,
      genero: genero,
      biblioteca: this.nombre
    };
    this.libros.push(nuevoLibro);
  },
  listarLibros: function() {
    console.log(`Libros en ${this.nombre}:`);
    this.libros.forEach(function(libro) {
      console.log(`- ${libro.titulo} por ${libro.autor}`);
    });
  },
  obtenerInformacion: function() {
    console.log(`Información de ${this.nombre}:`);
    console.log("Claves:", Object.keys(this)); // Obtener las claves de la biblioteca
    console.log("Valores:", Object.values(this)); // Obtener los valores de la biblioteca
    console.log("Claves y valores:", Object.entries(this)); // Obtener las claves y valores en un array
  }
};

biblioteca.agregarLibro("1984", "George Orwell", "Ciencia ficción");
biblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico");
biblioteca.agregarLibro("El gran Gatsby", "F. Scott Fitzgerald", "Novela");

biblioteca.listarLibros();
biblioteca.obtenerInformacion();
