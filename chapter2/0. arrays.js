//Arreglos en javascript ***********************************************************************

let noVector = "contenido"; //dato primitivo tipo String
let vectorArray = ["Lucas", "Brian", "23", "25", "Buenos Aires", "Valle de chalco"];
let frutas = ["banana", "manzana", "pera", "fresa"];

console.log(frutas);

//agregando un elemento al final de la lista
frutas.push("durazno");

//mostrando los elementos a travez de su indice 
leerArray = (posicion) => {
    if (frutas[posicion] == undefined) console.log(`No existe el elemento ${posicion}!!!`);
    else console.log("El elemento es: " + frutas[posicion]);  
}

leerArray(8)

//Array asociativo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//tipo JSON - notacion de objetos
let PC = {
    nombre: "Brian-HP",
    modeloCPU: "Intel Core i5 4770",
    ciclosCPU: "3.2 Ghz",
    ciclosCPUMax: "3.6 Ghz",
    tipoRAM: "ddr3 1333 mhz",
    ramDsiponible : "8gb",
    espacioDD: "1TB"
};
//modos de acceder a los objetos: 
console.log(PC.ciclosCPU + " " +PC.modeloCPU);
console.log(PC["ciclosCPUMax"]);

let frase = `El nombre de mi pc es: ${PC.nombre}, tiene ${PC.modeloCPU} a ${PC.ciclosCPUMax}`;
console.log(frase);



