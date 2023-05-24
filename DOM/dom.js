"use strict";

// Obtener una referencia al contenedor de productos
const contenedorProductos = document.getElementById('productos');

// Obtener una referencia al contenedor del carrito y al total
const contenedorCarrito = document.getElementById('items-carrito');
const totalCarrito = document.getElementById('total-carrito');

// Agregar un evento de clic a todos los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar');
botonesAgregar.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Obtener la información del producto seleccionado
    const producto = this.parentNode;
    const nombreProducto = producto.querySelector('h2').textContent;
    const precioProducto = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));

    // Crear un nuevo elemento de lista para el carrito
    const itemCarrito = document.createElement('li');
    itemCarrito.textContent = nombreProducto + ' - $' + precioProducto.toFixed(2);

    // Agregar el nuevo elemento de lista al carrito
    contenedorCarrito.appendChild(itemCarrito);

    // Actualizar el total del carrito
    const totalActual = parseFloat(totalCarrito.textContent);
    totalCarrito.textContent = (totalActual + precioProducto).toFixed(2);
  });
});

