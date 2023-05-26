import { authenticateUser } from './identificacion.js';

document.getElementById('login-button').addEventListener('click', authenticate);

function authenticate() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const result = authenticateUser(username, password);

  if (result) {
    showMessage('Inicio de sesión exitoso.', 'green');
  } else {
    showMessage('Inicio de sesión fallido. Verifica tus credenciales.', 'red');
  }
}

function showMessage(message, color) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.color = color;
}
