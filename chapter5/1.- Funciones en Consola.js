// FUNCIONES Y PROPIEDADES DE LA CONSOLA 

// FUNCIONES DE REGISTRO --------------------------------------------------------------

// CLEAR() - LIMPIA LA CONSOLA 
console.clear();

// ASSERT() - ARROJA UN MENSAJE EN CONSOLA SI LA AFIRMACION NO ES CORRECTA 
console.assert(7 > 3);
console.assert(1 > 3);

// ERROR() - MUESTRA UN MENSAJE DE ERROR EN LA CONSOLA 
console.error("OMG ¿Que has hecho?");
// esto pone en rojo el mensaje en la consola del explorer;

// INFO() - EMITE UN MENSAJE INFORMATIVO EN LA CONSOLA 
console.info("Mensaje informativo!!!");

// LOG() - MUESTRA E IMPRIME EN LA CONSOLA X MENSAJE
console.log("Mi mensaje de depuración!");
// log se usa para mandar mensajes de depuracion

// TABLE() - ESTA FUNCION TOMA UN ARGUMENTO OBLIGATORIO: DATA, QUE DEBE SER UN ARRAY O UN OBJETO, Y 
//  UN PARAMETRO ADICIONAL : COLUMNS Y NOS MUESTRA UNA TABLA EN CONSOLA 
let objeto = {
    tiesto: "DJ",
    armin: "DJ"
}
console.table(objeto);

// WARN() - IMPRIME UN MENSAJE DE ADVERTENCIA EN LA CONSOLA 
console.warn("Este es un mensaje de advertencia!");

// DIR() - Nos dezplaza la info y propiedades y métodos del mismo mas ordenadamente
console.dir([1, 2, 3, 4, 5, 6])

// FUNCIONES DE CONTEO --------------------------------------------------------------------------------------------------------

// COUNT() REGISTRA EL NUMERO DE VECES QUE SE LLAMA A COUNT(). ESTÁ FUNCION TOMA COMO ARGUMENTO OPCIONAL UNA ETIQUETA 
// COUNTRESET() - RESETEA EL COUNT()
for (let index = 0; index < 10; index++) {
    console.count();
    if (index == 7) {
        console.countReset();
    }
}

// FUNCIONES DE AGRUPACION  --------------------------------------------------------------------------------------------------------

// GROUP() - ESTA INSTRUCCION AGRUPA MENSAJES DE CONSOLA 
console.group("GRUPO 0");
console.log("Este es mi grupo 0");
console.info("Te mando esta info crack!");

console.group("Grupo 0.1");
console.log("Este es mi grupo 0.1");
console.info("Te mando esta info crack!");

console.groupEnd();
console.groupEnd();
// GROUPEND() - TE SACA DEL GRUPO EN DONDE TE ENCUENTRES

console.groupCollapsed("Grupo 0.1");
// GROUPCOLLAPSED() - NO DIRIGE AL GRUPO REQUERIDO PERO OCULTA TODA LA INFORMACION

console.groupEnd();
console.groupEnd();

// FUNCIONES DE TEMPORIZACION  --------------------------------------------------------------------------------------------------------

// TIME() - INICIA UN TEMPORIZADOR
console.time();
console.log("Inicia conteo");
for (let index = 0; index < 40; index++) {
    console.log(`Mensaje ${index}`);
    // TIMELOG() - REGISTRA EL VALOR ACTUAL DEL TEMPORIZADOR 
    console.timeLog();
    console.log("toma conteo");
}

// TIMEEND() - TERMINA TEMPORIZADOR
console.timeEnd();
console.log("termina conteo");

// CAMBIAR ESTILO DEL TEXTO CONSOLE  --------------------------------------------------------------------------------------------------------
console.log("%cHOLA MUNDO", "color:white; background:black; padding:20px; border-radius: 10px");

// *nota: para una mejor visualicacion de estos comandos, ejecutar y ver resultados desde el navegador, no desde node 