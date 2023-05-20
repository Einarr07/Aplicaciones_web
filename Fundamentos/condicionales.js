'use strict';

const producto = "Smartphone";
const precio = 500;
const saldoCuenta = 600;

if (saldoCuenta >= precio) {
    console.log("¡Compra exitosa!");
    console.log(`Has comprado un ${producto} por $${precio}.`);
    const saldoRestante = saldoCuenta - precio;
    console.log(`Saldo restante en tu cuenta: $${saldoRestante}.`);
} else {
    console.log("Fondos insuficientes");
    console.log("No puedes realizar la compra");
}
