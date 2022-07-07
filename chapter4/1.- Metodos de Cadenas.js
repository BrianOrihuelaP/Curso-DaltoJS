let cadena0 = "Estamos estudiando el tema de metodos con cadenas del curso JS. Curso de JS por Dalto.";

//  *concat()* = junto dos o mas cadenas y retorna una nueva 
console.log("********************************************CONCAT()**************************************************");

let resultado = cadena0.concat(" Metodo concat;");
let cadena1 = "JAVASCRIPT";

resultado = cadena0.concat(cadena1);

console.log(resultado);

// *startsWith()* = (resultado = boolean) si una cadena comienza con los caracteres de otra cadena, devuelve true
console.log("***********************************STARTSWITH() && ENDSWITH()*****************************************");

console.log(resulado = cadena0.startsWith("Hola"));
console.log(resulado = cadena0.startsWith("cadena"));

// *includes()* = si una cadena puede encontrarse dentro de otra cadena, devuelve true
console.log("**************************************INCLUDES()************************************************");
// comprueba si la cadena1 esta contenida en la cadena0

cadena1 = "cadena";
console.log(resulado = cadena0.includes(cadena1));

cadena1 = "de";
console.log(resulado = cadena0.includes(cadena1));

cadena1 = "no";
console.log(resulado = cadena0.includes(cadena1));

// *indexOf()* = devuelve el indice del primer carater de la cadena, si no existe devuelve -1
console.log("**************************************INDEXOF()************************************************");
// Aqui hice esta funcion para hacer mas agil las pruebas y no estar repitiendo el codigo 

let indexString = (palabra, cadena) => {
    let indice = cadena.indexOf(palabra);
    if (indice != -1) {
        return `la palabra "${palabra}" se encuentra en la posicion: ${indice} de la cadena: 
    "${cadena}"`;
    } else {
        return `La palabra ${palabra} no esta contenida en la cadena`;
    }
}

console.log(indexString("hola", cadena0));
console.log(indexString("de", cadena0));
console.log(indexString("en", cadena0));
console.log(indexString("curso", cadena0));
console.log(indexString("JS", cadena0));

// *lastIndexOf()* = devuelve el ultimo indice del primer carater de la cadena, si no existe devuelve 1
console.log("**************************************LASTINDEXOF()************************************************");

let lastIndexString = (palabra, cadena) => {
    let indice = cadena.lastIndexOf(palabra);
    let cadena2 = cadena.slice(indice, -1);
    // slice vacia el contenido de una cadena a otra a partir del rango
    if (indice != -1) {
        return `La palabra "${palabra}" se encuentra en la posicion: ${indice} de la cadena: 
                "${cadena}"; 
                Desde aqui se encontro la palabra: "${cadena2}"`;
    } else {
        return `La palabra ${palabra} no esta contenida en la cadena`;
    }
}

//  Aquí lo que hace el metodo, es que recorre toda la cadena de atras hacia delante, y si encuentra la palabra en multiples ocasiones
//  solo toma la primera incidencia recorrida (ultima palabra de la cadena si se lee normalmente)
console.log(lastIndexString("JS", cadena0));
console.log(lastIndexString("de", cadena0));


