'use strict';

const productos = [
    { id: 1, nombre: "Camiseta", precio: 20 },
    { id: 2, nombre: "Pantalón", precio: 30 },
    { id: 3, nombre: "Zapatos", precio: 50 },
    { id: 4, nombre: "Bolso", precio: 40 },
    { id: 5, nombre: "Sombrero", precio: 15 }
  ];
  
  // Filtrar productos por precio menor a 40
  const productosBaratos = productos.filter(producto => producto.precio < 40);
  console.log("Productos baratos:", productosBaratos);
  
  // Mapear los nombres de los productos en un nuevo array
  const nombresProductos = productos.map(producto => producto.nombre);
  console.log("Nombres de productos:", nombresProductos);
  
  // Reducir el array para obtener el precio total de los productos
  const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
  console.log("Precio total:", precioTotal);
  
  // Encontrar el producto con el precio más alto
  const productoMasCaro = productos.reduce((productoMax, producto) => {
    if (producto.precio > productoMax.precio) {
      return producto;
    } else {
      return productoMax;
    }
  });
  console.log("Producto más caro:", productoMasCaro);
  
  // Comprobar si todos los productos tienen un precio mayor a 10
  const todosPreciosMayores10 = productos.every(producto => producto.precio > 10);
  console.log("¿Todos los precios son mayores a 10?", todosPreciosMayores10);
  
  // Encontrar el primer producto con precio menor a 20
  const primerProductoMenor20 = productos.find(producto => producto.precio < 20);
  console.log("Primer producto menor a 20:", primerProductoMenor20);
  