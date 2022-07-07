// METODOS CON ARREGLOS-------------------------------------------------------------------------------------------------

const sonyGames = ["God of War", "Uncharted", "Ratchet & Clank", "Last of Us", "Spider-man", "Spider-man Miles Morales"];
var resultado;

console.log("Vector original: " + sonyGames);

// *TRANSFORMADORES***********************************************************************************************************

//  *pop() = elimina el ultimo elemento del arreglo y lo retorna 
console.log("********************************************POP()**************************************************");

resultado = sonyGames.pop();

console.log("Elemento eliminado: " + resultado);
console.log("Vector resultante: " + sonyGames);

//  *shift() = elimina el primer elemento de un array y lo retorna
console.log("********************************************SHIFT()**************************************************");

resultado = sonyGames.shift();

console.log("Elemento eliminado: " + resultado);
console.log("Vector resultante: " + sonyGames);

//  *push() = agrega un elemento al final del arreglo
console.log("********************************************PUSH()**************************************************");

var game = "Gran Turismo";
resultado = sonyGames.push(game);

console.log("Elemento agregado: " + game);
console.log("Vector resultante: " + sonyGames);

//  *reverse() = invierte el orden de los elementos de un array
console.log("********************************************REVERSE()**************************************************");

resultado = sonyGames.reverse();
console.log("Vector resultante: " + sonyGames);

//  *unshift() = agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array 
console.log("********************************************UNSHIFT()**************************************************");

resultado = sonyGames.unshift("Infamous");
console.log("Vector resultante: " + sonyGames);

//  *sort() = ordena los elementos del arreglo localmente y devuelve el arreglo ordenado 
console.log("********************************************SORT()**************************************************");

resultado = sonyGames.sort();
console.log("Vector resultante ORDENADO: " + sonyGames);

//  *splice() = cambia el contenido de un array eliminando los elementos existentes y/o agregando nuevos elementos
console.log("********************************************SPLICE()**************************************************");

sonyGames.splice(1,2);
// eliminame del vector los elementos que encuentres de la posicion 1 al 2
console.log("Vector resultante: " + sonyGames);

sonyGames.splice(1,2,"Little big planet","Beyond two Souls");
// vuelveme a eliminar de la posicion 1 al 2 y agregame estos elementos
console.log("Vector resultante: " + sonyGames);

sonyGames.splice(1,0, "Heavy Rain");
// no me elimines nigun elemento y agrega el siguiente
console.log("Vector resultante: " + sonyGames);

sonyGames.splice(-1, 0, "Metal Gear Solid");
// no me elimines nigun elemento y agrega el siguiente elemento al uno antes del final del array
console.log("Vector resultante: " + sonyGames);

// splice(desd donde comenzar, elemetos a eliminar, elementos a agregar)

// *ACCESORES***************************************************************************







