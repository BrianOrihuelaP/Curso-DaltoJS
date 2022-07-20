// *******************************************************MATH****************************************************************

// *Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.
// A diferencia de los demás objetos globales, el objeto Math no se puede editar. Todas las propiedades y métodos de Math son 
// estáticos. Usted se puede referir a la constante pi como Math.PI y puede llamar a la función seno como Math.sin(x), donde x es 
// el argumento del método. Las constantes se definen con la precisión completa de los números reales en JavaScript.

// *METODOS*************************************************************************************************************
console.log("METODOS-----------------------------------------------------------------------");
// el metodo sqrt calcula la raiz cuadrada de x numero
let numero = Math.sqrt(49);
console.log("Raiz con Math: " + numero);

// el metodo cbrt calcula la raiz cubica de x numero
numero = Math.cbrt(64);

// el metodo ma< toma n cantidad de numeros y retorna el mas grande
numero = Math.max(4,1,2,3,4,56,54,23,45);
console.log(` El numero mas grande del rango : 4,1,2,3,4,56,54,23,45 es: ${numero}`);

// EL METODO MIN ES LO CONTRARIO A MAX
numero = Math.min(4,1,2,3,4,56,54,23,45);
console.log(` El numero mas chico del rango : 4,1,2,3,4,56,54,23,45 es: ${numero}`);

// Esta metodo retorna un aleatorio entre el 0 y 1
numero = Math.random();
console.log(` El numero semi-aleatorio es: ${numero}`);

// redondea un numero a partir de un entrada
numero = Math.round(2.3);
console.log("Redondeando el numero 2.3: " + numero);

numero = Math.round(Math.random() * 100);
console.log("Numero aleatorio redondeado con round: " + numero);
// de esta manera multiplico la funcion Math por 100 para que me de numeros semi-ale. del 0 al 100
// despues con round me redondea ese numero al valor entero mas cercano -> 23.345456 => 23
// *DESVENTAJA = si se usa esta funcion tal y como esta, habra dos veces la oportunadidad de sacar 1 y 99 en la funcion
//  Pobabilidad de 1 = 2/100 ; Probabilidad de 99 = 2/100 

numero = Math.floor(22.6666);
console.log(numero);
// floor es un metodo de Math el cual redondea al numero entero menor : 2.9 = 2
numero = Math.random() * 99;
console.log(Math.floor(numero) + 1);
// *DESVENTAJA = si se usa esta funcion tal y como esta, nunca saldra el 100 pero si el 0, si se suma 1 ahora no saldra el 0 ni 100

// for (let index = 0; index < 1000; index++) {
//     console.log(Math.floor(Math.random() * 99) + 1);
// } con esto comprobamos que no sale el 0.

numero = Math.fround(9.4456768765654321113498765);
console.log(numero);
// Este metodo devuelve la representación flotante de precisión simple de 32 bits más cercana de un número.

numero = Math.trunc(9.9);
console.log(numero);
// Este metodo elimina los decimales, no redondea solo elimina

// PROPIEDADES*****************************************************************************************************
console.log("PROPIEDADES------------------------------------------------------------------------");
numero = Math.PI;
console.log("Imprimiendo el valor de PI con Math: " + numero);

numero = Math.SQRT1_2;
console.log("Imprimiendo el valor de raiz cuadrada(1/2) con Math: " + numero);

numero = Math.SQRT2;
console.log("Imprimiendo el valor de raiz cuadrada(2) con Math: " + numero);

// *NOTA: Todas esas propiedades son tomadas como la representacion mas simple de 32 bits de un numero (15 decimales reultantes)