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

sonyGames.splice(1, 2);
// eliminame del vector los elementos que encuentres de la posicion 1 al 2
console.log("Vector resultante: " + sonyGames);

sonyGames.splice(1, 2, "Little big planet", "Beyond two Souls");
// vuelveme a eliminar de la posicion 1 al 2 y agregame estos elementos en su lugar
console.log("Vector resultante: " + sonyGames);

sonyGames.splice(1, 0, "Heavy Rain");
// no me elimines nigun elemento y agrega el siguiente despues del primero
console.log("Vector resultante: " + sonyGames);

sonyGames.splice(-1, 0, "Metal Gear Solid");
// no me elimines nigun elemento y agrega el siguiente elemento quedando en penultimo lugar
console.log("Vector resultante: " + sonyGames);

// splice(donde comenzar, elemetos a eliminar, elementos a agregar)



// *ACCESORES*******************************************************************************************************

//  *join() = une todos los elementos de una matriz (u objeto similar) en una cadena y la retorna 
console.log("*******************************************JOIN()**************************************************");

resultado = sonyGames.join();
console.log(resultado + "  ->  Tipo de variable: " + typeof resultado);

// join nos permite usar separadores de la siguiente manera: 
resultado = sonyGames.join("  -  ");
// resultado = sonyGames.join("<br> elemento: "); 
console.log(resultado + "  ->  Tipo de variable: " + typeof resultado);

resultado = sonyGames.join(`\n Elemento: `);
console.log(resultado + " \n ->  Tipo de variable: " + typeof resultado);

//  *slice() = devuelve una parte del arreglo en uno nuevo a partir de un rango 
console.log("*******************************************SLICE()**************************************************");

console.log("Vector original: " + sonyGames);

resultado = sonyGames.slice(0, 3);
console.log(resultado);
// de esta manera se copian los objetos de la posicion 0 hasta la 3

resultado = sonyGames.slice(3, -1);
console.log(resultado);
// de esta manera copia los elementos que estan del final hasta el elemento 3

sonyGames.push("God of war Ascencion");
// agregando otro elemento al final 

resultado = sonyGames.slice(3);
console.log(resultado);
// de esta otra manera se copian todos los elementos a partir de la posicion idicada
// *NOTA = No tendria caso copiar todos los elementos con slice, simplemente igualamos y ya



// *Metodos cadena que tambien de utiliza en arrays: 

let existe = sonyGames.includes("Uncharted");
console.log("Include = " + existe);

existe = sonyGames.indexOf("God of war Ascencion");
// recordar - indexOf == -1 no existe elemento
console.log("IndexOf = " + existe);



// *DE REPETICION*******************************************************************************************************

//  *filter() = Crea un nuevo array con todos los elementos que cumplan la condicion  
console.log("*******************************************FILTER()**************************************************");

sonyGames.filter(
    // filter va a hacer un bucle
    games => console.log(games + "\n")
    // cada elemento del vector se va a almacenar en al variable games
    // se va a mostrar y va a realizar lo contenido en la funcion
);

console.log("\n");
sonyGames.filter(
    (games) => {
        console.log("Juego de PS3: " + games);
    }
);
// *NOTA: Si se usa filter de la manera anterior no tendria caso dado que se usa como un simple for
// Filtrando y usando el metodo de una manera mas apropiada--------------------------
console.log("\n");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
resultado = numeros.filter(
    // para filtrar, filtrame los numeros que sean pares y guardame el resultado en "resultado"
    numero => numero % 2 == 0
);

console.log("Vector numeros original: " + numeros);
console.log("Vector filtrado por pares: " + resultado);

resultado = numeros.filter(
    // para filtrar, filtrame los numeros que sean pares y guardame el resultado en "resultado"
    numero => numero % 2 != 0
);

console.log("Vector filtrado por impares: " + resultado);

// Vector de objetos!
console.log("VECTOR DE OBJETOS****************************************");
const bestGames = [
    {
        name: "God of War 3",
        release: 2013,
        company: "SONY - Santa Monica",
    },
    {
        name: "The Last of Us",
        release: 2013,
        company: "SONY - Naughty Dog",
    },
    {
        name: "Resident Evil 4",
        release: 2006,
        company: "CapCom",
    },
    {
        name: "Uncharted - Drake´s Fortune",
        release: 2007,
        company: "SONY - Naughty Dog",
    }
];

console.log(bestGames);
// imprimo el vector de objetos

resultado = bestGames.filter(games => games.release == 2006);
// filtrame  los juegos los cuales salieron el 2006
console.log("Filtrado: " + JSON.stringify(resultado));

// *NOTA: LA FUNCION JSON.STR... NO PERMITE IMPRIMIR LO CONTENIDO EN UN ARRAY DE OBJETOS  

resultado = bestGames.filter(games => games.company == "SONY - Naughty Dog");
// filtrame solo los juegos hechos por naugthy dog
console.log("FILTRADO: ");
console.log(resultado);

resultado = bestGames.filter(games => games.company == "SONY - Naughty Dog" && games.release == 2007);
// filtrame solo los juegos hechos por naugthy dog y que salieron el 2007
console.log("FILTRADO: ");
console.log(resultado);
// *NOTA: PARA PODER VER ADECUADAMENTE A UN ARRAY DE OBJETOS, NO DEBEMOS DE CONCATENAR TEXTO CON EL VECTOR

//  *forEach() =  ejecuta la funcion indicada una vez por cada elemento del array 
console.log("*******************************************FOREACH()**************************************************");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let suma = 0;

numbers.forEach(item => suma += item);
// El foreach es muy similar al for, en este caso decimos: 
// recorre cada elemento del array y lo vas a guardar en item, despues de al variable "suma" se le va a sumar el valor de cada elemento
// en cada iteracion 
console.log(suma);

const letras = ['a', 'b', 'c', 'a', 'b', 'a', 'a', 'c', 'b'];
let contador = {};
// como usaremos vector de letras, ocuparemos un objeto para meter la cunta en su literal -> {"letra" : 2 } 

letras.forEach(item => {
    if (contador[item]) {
        //recordar que: if(contador[item]) == if(contador[item] == true)
        // si ya existe la letra en el objeto, sumamos en su literal una unidad
        contador[item]++;
    } else {
        contador[item] = 1;
        // si no existe la letra en el objeto, entonces agrega 1 ; EJEMPLO: {'a' : 1}
    }
}
);
console.log(contador);





