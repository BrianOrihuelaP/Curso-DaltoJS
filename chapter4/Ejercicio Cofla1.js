// COFLA -> CAPITULO 4 - PARTE 1

// A) Cofla ya esta terminando el primer semestre del primer ciclo, la tarea que debe de ralizar es mas avanzada +
// de la que tenia antes, además de suma, resta, multiplicacion y division, ahora tamién necesitará calcular potencias, 
// raices cuadradas y cúbicas.

//  Crear soluciones:
// - Perfeccionar calculadora para implementar las nuevas funciones.

//  EJERCICIO #3 del capitulo 2.- Realizar un calculadora 

const sumar = (x, y) => {
    return alert("Resultado de la suma:" + (x + y));
};

const restar = (x, y) => {
    return alert("Resultado de la resta:" + (x - y));
};

const multiplicar = (x, y) => {
    return alert("Resultado de la multiplicación:" + (x * y));
};

const dividir = (x, y) => {
    return alert("Resultado de la divición:" + (x / y));
};
const potencia = (base, exp) => {
    return alert(`Resultado de ${base} ^ ${exp} = ` + (Math.pow(base, exp)))
}

const sqrt = (x) => {
    return alert(`La raiz cuadrada de ${x} = ` + (Math.sqrt(x)));
}
const cbrt = (x) => {
    return alert(`La raiz cúbica de ${x} = ` + (Math.cbrt(x)));
}

const seleccionar = (seleccion, x, y) => {
    switch (seleccion) {
        case 1:
            sumar(x, y);
            break;

        case 2:
            restar(x, y);
            break;

        case 3:
            multiplicar(x, y);
            break;

        case 4:
            dividir(x, y);
            break;

        case 5:
            potencia(x, y);
            break;

        case 6:
            sqrt(x);
            break;

        case 7:
            cbrt(x);
            break;

        default:
            alert("Unexpected Error!!!")
            break;
    }
}


alert("¿Qué operacion quieres hacer?; Digite un numero del 1 al 7");
let operacion = prompt("1.- Suma; 2.- Resta; 3.- Multiplicación; 4.- Divición;  5.- Potencia; 6.-  Raiz Cuadrada; 7.- Raíz Cúbica");
let seleccion = parseInt(operacion);

if (seleccion > 0 && seleccion <= 5) {
    let x = prompt("Primer numero: ");
    let y = prompt("Segundo numero: ");
    // isNaN es una funcion que verifica si el input del usuario es o no un numero
    // si es numero el resultado de la funcion es false y viceversa
    if (isNaN(x) == false && isNaN(y) == false) {
        seleccionar(seleccion, parseInt(x), parseInt(y));
    } else {
        alert("Por favor digite un numero!!!");
    }
} else if (seleccion > 5 && seleccion <= 7) {
    let x = prompt("Numero a calcular raíz: ");
    if (isNaN(x) == false) {
        seleccionar(seleccion, parseInt(x), y = 0);
    } else {
        alert("Por favor digite un numero!!!");
    }
} else {
    alert("Por favor escoga una operación");
}
