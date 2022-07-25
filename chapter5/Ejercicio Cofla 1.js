// COFLA -> CAPITULO 5 - PARTE 1

// A) Termino el primer semestre y Cofla no sabe si aprobara o no las materias, para lograrlo necesitara
// contar con al menos 90% de asistencia.
// El promedio por materia debe de ser de al menos 7 / 10
// Debe de contar con el 75% de los trabajos practicos entregados

// CREAR SOLUCIONES:
// - Solicitar los datos y decirle si aprueba o no
// - Mostrar todo esto con colores representativos en consola ( ej. reprobado - rojo)

let trabajosTotales = 10;

var materias = {
    // array [asistencias, promedio, trabajos entregados]
    fisica : [80,7,8],
    mate : [90,8,8],
    logica : [90,9,9],
    programacion : [88,9.9,9],
    redes : [94,9.7,9],
    poo : [96,9,8],
    metricas : [98,10,9]
}

// SOLUCION POR MATERIA INDIVIDUAL------------------------------------------------------
const aprobarMaterias = (materia) => {
    console.log("Materia: " + materia);

        let asistencias = materias[materia][0];
        let calif = materias[materia][1];
        let trabajos = materias[materia][2];

        if (asistencias < 90 || calif <= 7 || trabajos < 7) {
            return console.log(`   %cReprobaste`,"color:red");
        } else {
            return console.log(`   %cAprobaste`,"color:green");
        }
    
}

aprobarMaterias("fisica");
aprobarMaterias("mate");
aprobarMaterias("logica");
console.log("---------------------------------------------------");
// SOLUCION PARA TODAS LAS MATERIAS------------------------------------------------------------

const aprobo = () => {
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let calif = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log("Materia: " + materia);

        if (asistencias >= 90) {
            console.log("%c Asistencia en orden", "color: green");
        } else {
            console.log("%c Reprobado por inasistencias", "color: red");
        }

        if (calif >= 7) {
            console.log("%c Promedio aprobatorio", "color: green");
        } else {
            console.log("%c Reprobado por mal promedio", "color: red");
        }

        if (trabajos >= 7) {
            console.log("%c Buena entrega de trabajos", "color: green");
        } else {
            console.log("%c Reprobado por nmo entregar trabajos", "color: red");
        }
    }
}

aprobo();