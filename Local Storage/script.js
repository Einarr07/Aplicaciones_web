"use strict";

// Obtenemos una referencia al formulario y al elemento de la lista de notas
const formulario = document.querySelector('#formulario');
const lista = document.querySelector('#lista');

// Cargamos las notas almacenadas en el LocalStorage cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarNotas);

// Agregamos el evento que nos permite enviar las notas al formulario
formulario.addEventListener('submit', agregarNota);

// Función para agregar una nueva nota
function agregarNota(e) {
    e.preventDefault();

    // Obtención del valor del campo de entrada
    const textoNota = document.querySelector('#texto_nota').value;

    // Crear un objeto para representar las notas
    const nota = {
        id: Date.now(),
        texto: textoNota
    };

    // Obtener las notas existentes en el LocalStorage
    let notas = JSON.parse(localStorage.getItem('notas')) || [];

    // Agregar la nota al arreglo
    notas.push(nota);

    // Guardar el arreglo de notas actualizando el LocalStorage
    localStorage.setItem('notas', JSON.stringify(notas));

    // Mostrar la nota en la lista de notas
    mostrarNota(nota);

    // Limpiar el campo de entrada
    document.querySelector('#texto_nota').value = '';
}

// Función para cargar las notas del LocalStorage
function cargarNotas() {
    let notas = JSON.parse(localStorage.getItem('notas')) || [];

    // Mostrar todas las notas 
    notas.forEach(mostrarNota);
}

// Función para mostrar una nota en la lista de notas
function mostrarNota(nota) {
    const li = document.createElement('li');
    li.textContent = nota.texto;

    // Agregar la nota a la lista
    lista.appendChild(li);
}
