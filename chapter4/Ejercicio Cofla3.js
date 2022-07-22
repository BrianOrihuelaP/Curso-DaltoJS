// COFLA -> CAPITULO 4 - PARTE 3

//  Cofla ya vio las 12 materias y se decidio en cual se va a inscribir asi que en tres dias lo hará,
// el problema es que se rompió el sistema de inscripciones...
// Crear solucion...........
// -Si hay mas de 20 alumnos anotados en la materia negar la inscripcion.
// -Si hay menos de 20 alumnosinscribir a Cofla y añadirlo a la lista de alumnos.


var materias;

const inscripcion = (materia,nombre) => {
    // Creando funcion la cual me dara toda la informacion de las materias;
    materias = {
        // creo el objeto con sus atributos (materias)
        fisica: ["Miguel Mendoza", "Brian", "Ulises", "Cofla", "Luis", "Yami"],
        programacion: ["Ricardo Bucio", "Brian", "Luis", "Ulises", "Cofla"],
        matematicas: ["Gabriel", "Brian", "Dilan", "Alberto", "Francisco"],
        logica: ["Lourdes Lopez", "Brian", "Cofla", "Luis", "Ulises"]
        // cada atributo tendra en su literal un vector con los alumnos
    }

    for (const iterator in materias[materia]) {
        if (iterator <= 20) {
            for (replica of materias[materia]) {
                console.log(replica);
                if (replica == nombre) {
                    return `No te puedes inscribir!!!`;
                } else {
                    return `Inscrito exitosamente!!!`;
                }
            }
            // materias[materia].push("Cofla");
        }else{
            return `Lo siento ya no hay mas lugares para la materia ${materia}`;
        }
    }

}

console.log(inscripcion("fisica","Cofla"));
// console.log(materias);