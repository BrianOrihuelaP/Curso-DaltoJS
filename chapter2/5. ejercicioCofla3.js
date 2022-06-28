//  EJERCICIO #3.- Realizar un calculadora super basica con las operaciones basicas

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

const seleccionar = (seleccion,x,y) => {
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

        default:
            alert("Unexpected Error!!!")
            break;
    }
}


alert("¿Qué operacion quieres hacer?; Digite un numero del 1 al 4");
let operacion = prompt("1.- Suma; 2.- Resta; 3.- Multiplicación; 4.- Divición");
let seleccion = parseInt(operacion);

if (seleccion > 0 && seleccion <= 4 ) {

    let x = prompt("Primer numero: ");
    let y = prompt("Segundo numero: ");
    // isNaN es una funcion que verifica si el input del usuarrio es o no un numero
    // si es numero el resultado de la funcion es false y viceversa
    if ( isNaN(x) == false && isNaN(y) == false ) {
        seleccionar(seleccion,parseInt(x),parseInt(y));
    } else {
        alert("Por favor digite un numero!!!");
    }
} else {
    alert("Por favor escoga una operación");
}





