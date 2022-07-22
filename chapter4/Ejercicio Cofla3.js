// COFLA -> CAPITULO 4 - PARTE 3

//  Cofla ya vio las 12 materias y se decidio en cual se va a inscribir asi que en tres dias lo hará,
// el problema es que se rompió el sistema de inscripciones...
// Crear solucion...........
// -Si hay mas de 20 alumnos anotados en la materia negar la inscripcion.
// -Si hay menos de 20 alumnosinscribir a Cofla y añadirlo a la lista de alumnos.

var materias;

const inscripcion = (materia, nombre) => {
    // Creando funcion la cual me dara toda la informacion de las materias;
    materias = {
        // creo el objeto con sus atributos (materias)
        fisica: ["Miguel Mendoza", "Brian", "Ulises", "Cofla", "Luis", "Yami"],
        programacion: ["Ricardo Bucio", "Brian", "Luis", "Ulises", "Cofla"],
        matematicas: ["Gabriel", "Brian", "Dilan", "Alberto", "Francisco"],
        logica: ["Lourdes Lopez", "Brian", "Cofla", "Luis", "Ulises"]
        // cada atributo tendra en su literal un vector con los alumnos
    }

    if (materias[materia] == undefined) {
        // comparando si es que existe la propiedad (materia)
        return "La materia no existe";
    }else{
        if (materias[materia].length <= 21 ) {
            // aqui se saca el # de alumnos (elementos) del array 
            validar =  busqueda(nombre, materias[materia]);
            // mandamos a llamar la funcion que inscribe
            return validar;
            // retornamos el resultado de la funcion
        } else {
            return `Lo siento ya no hay lugar!`;
            // si ya hay mas de 20, no permitimos la inscripcion
        }
    }
}

const busqueda = (nombre, vector) => {
    // esta funcion nos va a indicar si es que existe o no el alumno en la materia
    found = vector.find( alumno => alumno == nombre)
    // con esta instruccion sabremos si existe o no el alumno, find nos retorna el elemento a buscar
    if (found == nombre) {
        // si find encuentra el elemento entonces igualamos nombre
        return `Ya estas inscrito...`
    } else {
        // si no se encontro lo inscribimos, metemos elemento con push
        vector.push(nombre);
        return `Feliciades ${nombre} estas inscrito exitosamente!`
    }
}

// mandando a llamar las funciones

console.log(inscripcion("fisica", "Dilan"));
console.log(materias);