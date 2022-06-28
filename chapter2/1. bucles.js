// BUCLES Y ITERADORES*************************************************************************************
let numero = 0;
console.log("numero actual: " + numero);

if (numero < 10) {
    numero++;
    console.log("Sume 1 : " + numero);
}

console.log("Segui con el programa!!!!");
numero = 0;

// While **********************
while (numero <= 10) {
    console.log("Numero + 1: " + numero);
    numero++;
}
console.log("Fin del Bucle...");

// Do - while  *******************
// El do while primero ejecuta una vez y no revisa la condicion, 1.- ejecuta 2.- compara

console.log("DO - WHILE --------------------");
numero = 0;

do {
    console.log("numero : " + numero);
    numero++;
} while (numero > 4);

numero = 0;

// Break*****************************************
console.log("While con BREAK......................");

while (numero < 50) {
    console.log("numero : " + numero);
    if (numero == 20) break;
    numero++;
}

console.log("salio del bucle con break!!!");

// For ******************************************

for (let index = 0; index < 20; index++) {
        console.log("Numero : " + numero);
        numero++;
        if (index >= 10) numero++;
    // En el momento que el indice sea igual a 10, suma otra unidad mas y sumaria 2 unidades en cada vuelta 
}

console.log("Fin del Bucle...");

// for decrementando de 2 en dos
numero = 100;

for (let index = 100; index > 0; index--) {
    numero -= 2;
    console.log("Numero menos 2 : " + numero);
} 

console.log("Fin del Bucle...");
// la impresion llega a -100 dado que se decrementa de dos en dos, si se quiere parar en 0 se coloca index = 50 

let i = 6;

for (i; i > 0; i--) {
    console.log(i);
}

console.log(i);

console.log("FOR & CONTINUE *******************");

i = 0;

for (i; i < 20; i++) {
    if (i == 10) continue;
    // con esta instruccion se salta el 10 por que entra al if y se le indica que continue pero no existe un log y no imprime 
    console.log("Bucle continue:  " + i); //por el if se salta esta instruccion
}

// FOR IN & FOR OF
let animales = ["gato", "perro", "ave", "iguana"];

console.log("*****FOR IN & FOR OF*****");

for (animal in animales) {
    console.log(animal);
}
//FOR IN DEVUELVE LOS INDICES DE LOS ELEMENTOS
console.log("**********");

for (animal of animales) {
    console.log(animal);
}

// FOR OF DEVUELVE LOS ELEMENTOS DEL VECTOR
//***LABEL*****/
console.log("******************************vector anidado***********************************");
let array0 = ["Ulises", "Brian", "Axel", "Brandon"];
let array1 = ["Lupe", "Lalo", array0, "Yaret"];
console.log("---------Recorriendo vector empezando con for in -> for of------");

for (let array in array1) {
    // se hace un recorrido a partir de las posiciones del vector y se apoya en una variable la cual contendra los indices 
    if (array == 2) {
        // en el momento de llegar a la posicion 2, este va a contener un arreglo anidado, por lo cual cambiamos la forma del recorrido
        for (let array of array0) {
            // se recorre el vector array 0 en of y se imprime
            console.log(array);
        }
    } else {
        // si la posicion es distinta a dos, imprime lo contenido en array1[posicion]
        console.log(array1[array]);
    }
}

console.log("-----------------------------");

// otra manera de imprimir los elementos de array1 

for (let array of array1) {
    //de esta manera imprime los elementos tal y como se declaro
    console.log("ARRAY Value: " + array);
}

console.log("-----------------------------");
console.log("---------Recorriendo vector empezando con for of -> for in------");

// cambiando el tipo de lectura de los elementos: 

lecturaSegundo: //este es un label

for (let array of array1) {
    //de esta manera imprime los elementos tal y como se declaro con ayuda de for of
    if (array == array0) {
        // en el momento de que se lea el otro vector que cambie la lectura y empiece en for in
        for (let array in array0) {
            // continue lecturaSegundo; 
            //aqui decimos que solo continue con el ciclo exterior y que no haga nada en este
            console.log(array0[array]);
            // va imprimiendo por medio del indice
            // break lecturaSegundo;
            //rompemos el ciclo despues de imprimir una vez con ayuda de un label
        }
    } else {
        // si no encuentra el vector imprime normalmente 
        console.log(array);
    }
}





