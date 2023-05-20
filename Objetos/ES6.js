'use strict';

const biblioteca = {
  nombre: "Mi Biblioteca",
  ubicacion: "calle new york",
  libros: [],
  agregarLibro: function(titulo, autor, genero) {
    const nuevoLibro = {
        //Metodo ES6
      titulo,
      autor,
      genero,
      biblioteca: this.nombre // Acceso al nombre de la biblioteca a través de 'this'
    };
    this.libros.push(nuevoLibro); // Agregar el nuevo libro al arreglo de libros de la biblioteca
  },
  listarLibros: function() {
    console.log(`Libros en ${this.nombre}:`);
    this.libros.forEach(function(libro) {
      console.log(`- ${libro.titulo} por ${libro.autor}`);
    });
  }
};

// Agregar libros a la biblioteca
biblioteca.agregarLibro("1984", "George Orwell", "Ciencia ficción");
biblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico");
biblioteca.agregarLibro("El gran Gatsby", "F. Scott Fitzgerald", "Novela");

// Listar los libros de la biblioteca
biblioteca.listarLibros();
