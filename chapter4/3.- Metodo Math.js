// *Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.
// A diferencia de los demás objetos globales, el objeto Math no se puede editar. Todas las propiedades y métodos de Math son 
// estáticos. Usted se puede referir a la constante pi como Math.PI y puede llamar a la función seno como Math.sin(x), donde x es 
// el argumento del método. Las constantes se definen con la precisión completa de los números reales en JavaScript.

let numero = Math.sqrt(49);
console.log("Raiz con Math: " + numero);

numero = Math.cbrt(64);

numero = Math.max(4,1,2,3,4,56,54,23,45);
console.log(` El numero mas grande del rango : 4,1,2,3,4,56,54,23,45 es: ${numero}`);

numero = Math.min(4,1,2,3,4,56,54,23,45);
console.log(` El numero mas chico del rango : 4,1,2,3,4,56,54,23,45 es: ${numero}`);

numero = Math.random();
console.log(` El numero semi-aleatorio es: ${numero * 12}`);