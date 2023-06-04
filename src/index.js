"use strict";
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/pagina2', (req,res) =>{
  res.sendFile(path.join(__dirname, 'pagina2.html'))
});
// Ruta no encontrada
app.use((req, res) => {
  res.status(404).send('Error 404: Página no encontrada');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor web iniciado. Escuchando en el puerto ${port}`);
});
