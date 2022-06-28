// Comienzo de funciones: 

// Una funcion es un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento 
// califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia 
// entre la entrada y la salida.

function tusDatos(nombre, apellido) {
    return console.log(`Nombre: ${nombre} ${apellido}`);
}

function square(number) {
    return number * number;
}

function bucleNombre(veces) {
    for (let index = 0; index < veces; index++) {
        console.log("# " + (index + 1));
        tusDatos("Brian", "Perez");
    }
}

// Una definición de función (también denominada declaración de función o expresión de función) 
// consta de la palabra clave function, seguida de:
// El nombre de la función.
// Una lista de parámetros de la función, entre paréntesis y separados por comas.
// Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

// llamada a las funciones : 

let cuadrado = square(7);
console.log(cuadrado);

tusDatos("Brian", "Perez");

console.log("Funcion bucle..........");
bucleNombre(4);

// Declarando funciones por medio de variables

// let saludar = function () {
//     let nombre = prompt("Hola amig@!, ¿Cuál es tu nombre? ");
//     let respuesta = prompt(`¿ ${nombre} cuál es tu edad?`);

//     if (respuesta >= 18) {
//         alert(`${nombre} WOW!!! ya eres mayor de edad!`);
//     } else {
//         alert(`${nombre} WOW!!! todavia eres un bebe!`);
//     }
//     return nombre + respuesta;
// }

//NOTA : Si se ejecuta el archivo por medio de node, el prompt y alert genera un error por el nivel de frontend y node es backend
// let edad = saludar();
// console.log(edad);

// return nos devuelve un valor dentro de las funciones

// parametros ****************************
console.log("Más funciones con parametros *******************************");
let num0 = 31;
let num1 = 32;
let res = num0 + num1;
console.log(res);

function sumarDosNumeros(x, y) {
    return x + y;
}

console.log(sumarDosNumeros(20, 30));

// ARROW FUNCTIONS **********************************************
console.log("Más funciones - ARROW FUNCTION *******************************");

const multiplicar = (a,b) => {
    return a * b;
}

let a = 5, b=7;
console.log(`Función multiplicar: ${a} * ${b}` + ": " +  multiplicar(a,b));

// con las funciones flechas se puede ignorar el uso de las llaves como se muestra a continucion:

const saludoFlecha = nombre => console.log(`Hola ${nombre}, estás programando en JS`);
saludoFlecha("Brian");

// esto tiene una ventaja, dado que se reduce el codigo, es mas legible y los valores se retornan automaticamente

