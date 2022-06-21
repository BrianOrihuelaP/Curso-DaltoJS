// Ejercicio #!
// 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un prolema 
// Los precios no están al lado de cada estante con su respectivo helado
// Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que... veamos como ayudarlos

//Roberto tiene $1.5 USD
//Pedro tiene $1.7 USD
//Cofla tiene $3 USD

// Los precios de los helados son los siguientes:
// Paleta de agua : $0.6 USD
// Paleta de crema : $1.0 USD
// Sandiwch de helado Holanda : $1.6 USD
// Sandwich de helado de vainilla Holanda : $1.7 USD 
// Sandiwch de helado de nuez : $1.8 USD
// Litro de helado de chocolate : $2.9 USD
// Litro de helado imposible : $2.9 USD

// Crear la solucion:
// 1.- Pedir que ingresen el monto que se tiene y mostar el producto mas caro 
// Si hay dos o más del mismo precio, mostrar ambos
// Si sobra dinero, mostrar cuanto sobro

//MI PROPIA SOLUCIÓN**********************************************************************************************************
// Paso 1 .- Pedir cuanto dinero tiene cada uno de manera estatica

let dineroDisponible = .9;
// tAMBIEN SE PUEDE HACER : 
// let dineroDisponible = prompt("Cuanto dinero tienes? : ");

//PRODUCTOS: se manejaron los productos por medio de variables, esto tinene una ventaja dado que si se llega a cambiar el precio
//se cambia solo en las variables

// let paletaAgua = 0.6;
// let paletaCrema = 1;
// let sandwichHolanda = 1.6;
// let sandwichHolandaVainilla = 1.7;
// let sandwichHolandaNuez = 1.8;
// let ltHeladoChoco = 2.9;
// let ltHeladoImposible = 2.9;

// if (dineroDisponible >= ltHeladoChoco && dineroDisponible >= ltHeladoImposible) {
//     console.log("Te alcanza para: * Litro de Helado de Chocolate; *Litro de Helado de Nuez");
//     let cambio = dineroDisponible - ltHeladoChoco;
//     console.log("Tu cambio es: " + cambio.toFixed(2));
// } else if (dineroDisponible >= sandwichHolandaNuez && dineroDisponible >= sandwichHolandaVainilla) {
//     console.log("Te alcanza para: * Holanda, sandwich de nuez");
//     cambio = dineroDisponible - sandwichHolandaNuez;
//     console.log("Tu cambio es: " + cambio.toFixed(2));
// } else if (dineroDisponible <= sandwichHolandaNuez && dineroDisponible > sandwichHolanda) {
//     console.log("Te alcanza para: * Holanda, sandwich de vainilla");
//     cambio = dineroDisponible - sandwichHolandaVainilla;
//     console.log("Tu cambio es: " + cambio.toFixed(2));
// } else if (dineroDisponible == sandwichHolanda) {
//     console.log("Te alcanza para: * Holanda, sandwich original");
//     cambio = dineroDisponible - sandwichHolanda;
//     console.log("Tu cambio es: " + cambio.toFixed(2));
// } else if (dineroDisponible < sandwichHolanda && dineroDisponible >= paletaCrema) {
//     console.log("Te alcanza para: * Paleta de crema");
//     cambio = dineroDisponible - paletaCrema;
//     console.log("Tu cambio es: " + cambio.toFixed(2));
// } else if (dineroDisponible >= paletaAgua && dineroDisponible < paletaCrema) {
//     console.log("Te alcanza para: *Paleta de Agua");
//     cambio = dineroDisponible - paletaAgua;
//     console.log("Tu cambio es: " + cambio.toFixed(2));
// } else {
//     console.log("No te alcanza para nada ;(");
//     console.log("Tu dinero es: " + dineroDisponible + "Lo mas barato a comprara es la Paleta de agua: $ 0.6 USD ");
// }

//  FIN DE MJI SOLUCION PROPUESTA ! ;) - Funcionando 

// SOLUCION #2 PROPUESTA DE DALTO ;) ***************************************************************************************

// let name0 = prompt("Hola persona 1, cual es tu nombre?"); 
//para pedir el nombre 

// let dineroCofla = prompt(`Cuánto dinero tienes ${name0}?`); 
// se concatena el nombre pedido y se almacena el dinero que se metio 
// let dineroRoberto = prompt("Cuanto dinero tienes Roberto?: ");
// let dineroPedro = prompt("Cuanto dinero tienes Pedro?: ");

// if (dineroCofla >= 0.6 && dineroCofla < 1) { //comparamos el dinero directamente con los precios
//     alert("Comprate la Paleta de agua");
// } else if (dineroCofla >= 1 && dineroCofla <= 1.6) {
//     alert("Comprate la Paleta de crema");
// } else if(dineroCofla >=1.6 && dineroCofla < 1.7){
//     alert("Comprate el Holanda, sandwich original")
// } else if(dineroCofla >=1.7 && dineroCofla < 1.8){
//     alert("Comprate el Holanda, sandwich de vainilla")
// } else if(dineroCofla >=1.8 && dineroCofla < 2.9){
//     alert("Comprate el Holanda, sandwich de nuez")
// } else if(dineroCofla >= 2.9){
//     alert("Te alcanza para un litrote de helado! *Chocolate / Vainilla")
// }else{
//     alert("EFESOTA, no te alcanza para nada!")
// }

// Repetir las condicionales para cada persona !

//Solucion del problema mediante funciones ************************************************************************

 const definirCompra = (n) => {
    let money = prompt(`cuanto dinero tienes ${n}? : `);
    if ( money >= .6 && money <= 1) return (`${n}: Paleta de agua; Cambio: ${(money - .6).toFixed(2)}`);
    if ( money >= 1 && money <= 1.6) return (`${n}: Paleta de crema; Cambio: ${(money - 1).toFixed(2)}`);
    if ( money >= 1.6 && money < 1.7) return (`${n}: Comprate el Holanda, sandwich original; Cambio: ${(money - 1.6).toFixed(2)}`);
    if ( money >= 1.7 && money < 1.8) return (`${n}: Comprate el Holanda, sandwich de vainilla; Cambio: ${(money - 1.7).toFixed(2)}`);
    if ( money >= 1.8 && money < 2.9) return (`${n}: Comprate el Holanda, sandwich de nuez; Cambio: ${(money - 1.8).toFixed(2)}`);
    if ( money >= 2.9) return (`${n}: Te alcanza para un litrote de helado! *Chocolate / Vainilla; Cambio: ${(money - 2.9).toFixed(2)}`);
    else return (`${n}: EFESOTA, no te alcanza para nada ;(!!!)`);
 }
 alert(definirCompra("brian"))




