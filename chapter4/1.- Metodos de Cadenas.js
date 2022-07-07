let cadena0 = "Estamos estudiando el tema de metodos con cadenas del curso JS. Curso de JS por Dalto.";

//  *concat()* = junto dos o mas cadenas y retorna una nueva 
console.log("********************************************CONCAT()**************************************************");

let resultado = cadena0.concat(" Metodo concat;");
let cadena1 = "JAVASCRIPT";

resultado = cadena0.concat(cadena1);

console.log(resultado);

// *startsWith()* = (resultado = boolean) si una cadena comienza con los caracteres de otra cadena, devuelve true
console.log("***********************************STARTSWITH() && ENDSWITH()*****************************************");

console.log(resultado = cadena0.startsWith("Hola"));
console.log(resultado = cadena0.startsWith("cadena"));

// *includes()* = si una cadena puede encontrarse dentro de otra cadena, devuelve true
console.log("**************************************INCLUDES()************************************************");
// comprueba si la cadena1 esta contenida en la cadena0

cadena1 = "cadena";
console.log(resultado = cadena0.includes(cadena1));

cadena1 = "de";
console.log(resultado = cadena0.includes(cadena1));

cadena1 = "no";
console.log(resultado = cadena0.includes(cadena1));

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
    let indice = cadena.lastIndexOf(palabra); //AQUI LLAMAMOS LA FUNCION
    let cadena2 = cadena.slice(indice, -1);
    // slice vacia el contenido de una cadena a otra a partir de un rango
    if (indice != -1) {
        // SI SE ENCUENTRA LA CADENA, ENTONCES MUESTRAME LO SIGUIENTE
        return `La palabra "${palabra}" se encuentra en la posicion: ${indice} de la cadena: 
                "${cadena}"; 
                Desde aqui se encontro la palabra: "${cadena2}"`;
    } else {
        // SI NO SE ENCUENTRA ENTONCES RETORNA ESTE MENAJE
        return `La palabra ${palabra} no esta contenida en la cadena`;
    }
}

//  Aquí lo que hace el metodo, es que recorre toda la cadena de atras hacia delante, y si encuentra la palabra en multiples ocasiones
//  solo toma la primera incidencia recorrida (ultima palabra de la cadena si se lee normalmente)
console.log(lastIndexString("JS", cadena0));
console.log(lastIndexString("de", cadena0));


// *LOS SIGUIENTES 3 METODOS NO FORMAN PARTE DE ECMA, SOLO SON PROPUESTAS*
// -----------------------------------------------------------------------------------------------------------------
// *padStart() = rellena la cadena al principio con los caracteres propuestos
console.log("**************************************padStart()************************************************");

resultado = cadena0.padStart(99, "Capitulo 4.- ");
// padStart("Longitud de la cadena", "caracter para rellenar")
console.log(resultado);

// *padEnd() = rellena la cadena al final con los caracteres propuestos
console.log("**************************************padEnd()************************************************");

resultado = cadena0.padEnd(99, "Capitulo 4.- ");
// padEnd("Longitud de la cadena", "caracter para rellenar")
console.log(resultado);

// *repeat() = retorna una misma cadena n veces
console.log("**************************************repeat()************************************************");

cadena0 = "123";

resultado = cadena0.repeat(4);
console.log(resultado);
// -----------------------------------------------------------------------------------------------------------------

// *split() = Divide la cadena en n partes y lo retorna en un array
console.log("**************************************SPLIT()************************************************");

cadena0 = "Hola ,como estas, me llamo Brian. Hola Brian, un gusto conocerte";
resultado = cadena0.split(" ");

for (let index = 0; index < resultado.length; index++) {
    let element;
    console.log(`Posicion ${index} = ` + (element = resultado[index]));
}

// *substring() = Nos retorna un pedazo de la cadena que deseemoa
console.log("**************************************SUBSTRING()************************************************");

cadena0 = "ABCDEFGHIJK";
resultado = cadena0.substring(0, 4);
resultados = cadena0.substring(5, 8);
// *NOTA: el método nunca va  tomar el valor del limite superior
console.log(resultado);
console.log(resultados);

// *toLowerCase() = Convierte la cadena a minusculas 
console.log("**************************************TOLOWERCASE()************************************************");

cadena0 = "VAMOS A SER UNA MASTER DE JS";
resultado = cadena0.toLowerCase();

console.log(resultado);

// *toUpperCase() = Convierte la cadena a mayusculas
console.log("**************************************TOUPPERCASE()************************************************");

cadena0 = "Vamos a ser un master de CSS";
resultado = cadena0.toUpperCase();

console.log(resultado);

// *toString() = metodo que devuelve una cadena que representa al objeto especificado
console.log("**************************************TOSTRING()************************************************");

cadena0 = 12;
resultado = cadena0 + 12;

console.log(resultado);

resultado = cadena0.toString();
console.log(resultado + 12);

// con arreglos: 

cadena0 = ["Brian", "Ulises"];
resultado = cadena0.toString();

console.log(resultado);
console.log(resultado[0]);

// *trim() = elimina los espacios al principio y al final de la cadena
console.log("**************************************TRIM()************************************************");

cadena0 = "   JS   ";

resultado = cadena0;
console.log(resultado + " " + " -> Tamaño del string: " + resultado.length);

resultado = cadena0.trim();

console.log(resultado + " " + " -> Tamaño del string: " + resultado.length);

// *trimEnd() = elimina los espacios solo al final de la cadena 
console.log("**************************************TRIMEND()************************************************");

resultado = cadena0;
console.log(resultado + " " + " -> Tamaño del string: " + resultado.length);

resultado = cadena0.trimEnd();

console.log(resultado + " " + " -> Tamaño del string: " + resultado.length);

// *trimStart() = elimina los espacios solo al inicio de la cadena 
console.log("**************************************TRIMSTART()************************************************");

resultado = cadena0;
console.log(resultado + " " + " -> Tamaño del string: " + resultado.length);

resultado = cadena0.trimStart();

console.log(resultado + " " + " -> Tamaño del string: " + resultado.length);

// *valueOf() = convierte un objeto a valor primitivo string
console.log("**************************************VALUEOF()************************************************");

let strPrimitivo = "JAVASCRIPT";
let  strObjeto = new String("JAVASCRIPT");

console.log(typeof strPrimitivo);
console.log(typeof strObjeto);

// convirtiendo objeto a string

let strObjStr = strObjeto.valueOf();
console.log(`Cadena de tipo objeto: ${strObjeto} ahora es: ${typeof strObjStr}`);
