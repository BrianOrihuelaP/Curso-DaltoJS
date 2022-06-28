//EJERCICIO:
// Crear un minisistema que nos permita registrar los alumnso presentes (P) y ausentes (A) en clase.
// Pasados los 30 dias mostrar la situacion final de todos los alumnos ( # total de presentes y ausentes )
// Se puede tener un maximo de 10% de ausencias por semestre, si se tienen más, aclarar que esta reprobado.
// ---------------------------------------------------------------------------------------------------------------------

let cantidad = prompt("Cuantos alumnos son?: ");
// Preguntamso por el numero de alumnos
// let clases = promp("Cuantas clases habra: ");

let alumnosTotales = [];
// creamos un arreglo el cual va a guardar la lista de los alumnos y las asistencias 

// El siguiente arreglo iterara de acuerdo al numero de alumnos y gusradara los nombres
for (let index = 0; index < cantidad; index++) {
    alumnosTotales[index] = [prompt("Nombre del alumno " + (index + 1) + ": "), 0];
    // pregunta los nombres y los guarda de la siguiente manera: 
    // alumnosTotales[#] = ["NOMBRE", # ASISTENCIAS]
    // alumnosTotales[0] = ["Brian", 0]
    // alumnosTotales[1] = ["Ulises", 0]
    // alumnosTotales[2] = ["Brandon", 0]
}

// ALUMNOS TOTALES [FILA] [COLUMNA]
        // FILA 0 - [BRIAN, 0] => COLUMNA 0 - [BRIAN] => COLUMNA 1 - [0]
        // FILA 1 - [ULISES, 0] => COLUMNA 0 - [ULISES] => COLUMNA 1 - [0]

const asistencias = (nombre, numeroLista) => {
    let presencia = prompt("Está presente? : " + nombre);
    // se pregunta si tal alumno esta presente
    // si lo ingresado es igual a p o P entonces se agrega un 1 en el arreglo
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[numeroLista][1]++; 
        //se selecciona columna 1 "[1]" y si se cumple el if, se aumenta una unidad en cada iteracion
    }
}

// se ejecuta 30 veces el bucle, el numero de dias que se toma asistencia
for (let index = 0; index < 30; index++) {
    for (numLista in alumnosTotales) {
        asistencias(alumnosTotales[numLista][0], numLista)
        // se manda a llamar la funcion y se envia sus paratemtro => asistencias(nombre,numeroLista)
    }
}


for (alumno in alumnosTotales) {
    //metodo que nos imprime el resultado de las funciones
    //  si solo hay un alumno se muestra una vez la info, si hay mas lo hace n veces 

    // resultado = nombre, Asistencias #, ausencias #
    let resultado = `${alumnosTotales[alumno][0]}: <br> 
        Asistencias: ${alumnosTotales[alumno][1]}: <br>
        Ausencias: ${30 - alumnosTotales[alumno][1]} `;

    if (30 - alumnosTotales[alumno][1] >= 18) {
        // si se cumple esta condicion se concatena el siguiente texto
        resultado += "<br> <b style= 'color:red'> REPROBADO POR INASISTENCIAS <br>";
    }else{
        resultado += "<br> <br>";
    }
    document.write(resultado);
}