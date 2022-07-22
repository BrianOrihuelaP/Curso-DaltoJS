// B) La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor 
// y todos los alumnos que se anotarón en dichas clases, pero necesitamos ver esto más ordenadamente
// Crear soluciones :
// - Crear una funcion que al pasarle como parametro la materia. nos devuelva:
// Profesor Asignado
// Nombre de todos los alumnos

// - Crear Funcion que nos diga en cuantas clases esta cofla.
// Nombrar las clases en las que esta y los profes de cada una.
var materias;

const getInfo = (materia) => {
    // Creando funcion la cual me dara toda la informacion de las materias;
    materias = {
        fisica: ["Miguel Mendoza", "Brian", "Ulises", "Cofla", "Luis", "Yami"],
        programacion: ["Ricardo Bucio", "Brian", "Luis", "Ulises", "Cofla"],
        matematicas: ["Gabriel", "Brian", "Dilan", "Alberto", "Francisco"],
        logica: ["Lourdes Lopez", "Brian", "Cofla", "Luis", "Ulises"]
    }

    if (materias[materia] != undefined) {
        return info = `Profesor de ${materia} = ${materias[materia][0]}` + `\n` +
            `Alumnos inscritos en ${materia} = ${materias[materia].slice(1, 6)} \n`;
        //  recordar que slice devuelve n elementos a partir de un rango
    }
}

const cantidadClases = (materias) => {
    var cofla = 0, materiaCofla = [], profesCofla = [];
    for (const mate in materias) {
        for (const materia of materias[mate]) {
            if (materia == "Cofla") {
                materiaCofla[cofla] = mate;
                profesCofla[cofla] = materias[mate].shift();
                cofla++;
            }
        }
    }
    return `Materias inscritas= ` + cofla + ` \nMaterias : ${materiaCofla} \nProfes: ${profesCofla}`;
}

console.log(getInfo("fisica"));
console.log(getInfo("programacion"));
console.log(getInfo("matematicas"));
console.log(getInfo("logica"));
console.log(cantidadClases(materias));

