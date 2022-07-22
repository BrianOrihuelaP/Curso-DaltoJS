// B) La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor 
// y todos los alumnos que se anotarón en dichas clases, pero necesitamos ver esto más ordenadamente
// Crear soluciones :
// - Crear una funcion que al pasarle como parametro la materia. nos devuelva:
// Profesor Asignado
// Nombre de todos los alumnos

// - Crear Funcion que nos diga en cuantas clases esta cofla.
// Nombrar las clases en las que esta y los profes de cada una.
// -------------------------------------------------------------------------------------------------------------------------------

var materias;
// creando la variable que contendra la info de cada materia

const getInfo = (materia) => {
    // Creando funcion la cual me dara toda la informacion de las materias;
    materias = {
        // creo el objeto con sus atributos (materias)
        fisica: ["Miguel Mendoza", "Brian", "Ulises", "Cofla", "Luis", "Yami"],
        programacion: ["Ricardo Bucio", "Brian", "Luis", "Ulises", "Cofla"],
        matematicas: ["Gabriel", "Brian", "Dilan", "Alberto", "Francisco"],
        logica: ["Lourdes Lopez", "Brian", "Cofla", "Luis", "Ulises"]
        // cada atributo tendra en su literal un vector con los alumnos
    }

    if (materias[materia] != undefined) {
        // si al llamar la funcion meto una materia que exista entonces que me retorne toda la info de esa materia
        return info = `Profesor de ${materia} = ${materias[materia][0]}` + `\n` +
            `Alumnos inscritos en ${materia} = ${materias[materia].slice(1, 6)} \n`;
        //  recordar que slice devuelve n elementos a partir de un rango
    }
}

// Creando la funcion que recorrera a el objeto materias y devuelve las materias registradas, así como los profes
const cantidadClases = (materias) => {
    //  se crea la variable global cofla la cual se incrementara cada vez que encuentre el nombre Cofla para el total de materias
    var cofla = 0, materiaCofla = [], profesCofla = [];
    for (const mate in materias) {
        // se reccorre a travez de su indice al objeto materias
        for (const materia of materias[mate]) {
            // asi como se recorre por su indice, se necesita recorrer en cada elemento del vector con for of
            // y asi igualamos cada elemento del vector a "Cofla" para que en cada incidencia se incremente la variable
            if (materia == "Cofla") {
                materiaCofla[cofla] = mate;
                // con esta instruccion obtenemos la materia en la cual se encontro el nombre Cofla
                profesCofla[cofla] = materias[mate].slice(0,1);
                // con esta otra instruccion mostramos el profesor de la materia en la cual se encontro que esta inscrito
                cofla++;
                // como esta registrado, incrementamos para llevar el conteo
            }
        }
    }
    return `Materias inscritas = ` + cofla + ` \nMaterias : ${materiaCofla} \nProfes: ${profesCofla}`;
    //  y por ultimo mostramos la info recabada
}

console.log(getInfo("fisica"));
console.log(getInfo("programacion"));
console.log(getInfo("matematicas"));
console.log(getInfo("logica"));
console.log(cantidadClases(materias));

