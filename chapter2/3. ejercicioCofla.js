//      Problema:
// Un joven afortunado gano el premio de la loteria, este hombre decide hacer una fiesta para festegar.
// asi que compro una maquina que deja pasar solamente a los mayores de edad entre otras cosas....
// 1.- Dejar pasar a los mayores de edad
// 2.- La primer persona que ente a las 2 AM, no paga


let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cuál es tu edad?");

    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert(`Felicidades!!!, Puedes pasar gratis, hora: ${time}`);
            free = true;
        } else {
            alert(`Puedes pasar pero con un costo de $100.00, hora: ${time}`);
        }
    } else {
        alert("No entras!!!. Eres muy chico para entrar, solo mayores de 18");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1); 
validarCliente(2);
validarCliente(2.3);
validarCliente(3);
