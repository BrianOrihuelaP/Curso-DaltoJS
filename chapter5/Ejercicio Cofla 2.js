// COFLA -> CAPITULO 5 - PARTE 2

// B) Cofla está sufriendo un poco ... ya que,apesar de que cree contar con el 90% de asistencias
// y tener un promedio mayora 7/10, no cree entregar el 75% de trabajos practicos entregados ya
// que necesita dividir las tareas que hará semanalmente, así que necesita un programa el cual le acomode su
// horario.

// - Organizar las actividades diariamente
// - Utilizar la consola para organizar todo.

// -> Crear un organizador con los siguientes datos:

// Anotaciones = 
// 30 mins para deberes en casa
// 100 mins de hacer trabajo 
// 100 mins de estudiar 
// 10 mins de descanso 
// 240 mins de tabajar 

// SOLUCION------------------------------------------------------------------------------------------

let trabajo = "240 min";
let estudio = "100 min";
let tareas = "100 min"
let trabajosPracticos = "100 min";
let descanso = "10 min";

console.log("TAREAS-----------------------------------------");

for (let index = 1; index < 15; index++) {
    if (index == 1) {
        console.group("Semana 1");
    }
    console.group(`Dia ${index}`);
    console.log("Trabajo: " + trabajo);
    console.log("Descanso: " + descanso);
    console.log("Estudio: " + estudio);
    console.log("Trabajos Practicos: " + trabajosPracticos);
    console.log("Tareas: " + tareas);
    console.groupEnd();
    if (index == 7) {
        console.groupEnd();
        console.group("Semana 2");
    }
}
