// BUCLES Y ITERADORES*************************************************************************************
let numero = 0;
console.log("numero actual: " + numero);
if (numero < 10) {
    numero++;
    console.log("Sume 1 : " + numero);
}
console.log("Segui con el programa!!!!");

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
} console.log("Fin del Bucle...");

// for decrementando de 2 en dos
numero = 100;
for (let index = 100; index > 0; index--) {
    numero -= 2;
    console.log("Numero menos 2 : " + numero);
} console.log("Fin del Bucle...");
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
    // con esta instruccion se salta el 20 por que entra al if y se le indica que continue pero no existe un log y no imprime 
    console.log("Bucle continue:  " + i);
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
let array0 = ["Ulises", "Brian", "Axel", "Brandon"];
let array1 = ["Lupe", "Lalo", array0];

for (let array in array1) {
    if (array == 2) {
        for (let array of array0) {
            console.log(array);
        }
    } else {
        console.log(array1[array]);
    }
}

