// DOM------------------------------------------------------------------------


// * ¿Qué es un Nodo?: 
//  Un nodo en el DOM es cualquier etiqueta del cuerpo,como un párrafo,el mismo body o incluso las etiquetas de una lista.
// -Document: el nodo document es el nodo raiz, apartir del cual derivan el resto de nodos.
// -Element: nodos definidos por etiquetas html.
// -Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
// -Attribute: los atributos de las etiquetas definen nodos,(en Javascript no los veremos como nodos,
//              sino como información asociada al nodo de tipo element)
// -Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

// * 28) Document Metodos de Selección de elementosI
//        getElementById() Selecciona un elemento por ID
//        getElementsByTagName() Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
//        querySelector() Devuelve el primer elemento que coincida con el grupo especificado de selectores.
//        querySelectorAll() Devuelve todos los elementos que coincidan con el grupo especificado de selectores.


let parrafo = document.getElementById("parrafo");
// de esta manera obtenemos elementos desde html 
document.write(parrafo.textContent)
// de esta forma obtengo el texto del elemento

let parrafos = document.getElementsByTagName("p");
// obteniendo la coleccion de objetos con etiqueta p

let parrafoClass = document.querySelector(".parra");
document.write("<br>" + parrafoClass);
// seleccionando la clase

let parrafoNode = document.querySelectorAll(".node");
document.write("<br>" + parrafoNode + " --> Elementos de la clase Nodo: " + parrafoNode.length);
// seleccionando las clases en una lista de nodos

// 29) Metodos para Definir, Obtener y Eliminar valores de atributos.
    // -setAttribute() = Modifica el valor de un atributo
    // -getAttribute() = obtiene el valor de un atributo
    // -removeAttribute() =  Remueve el valor de un atributo


const rangoEdad = document.querySelector(".rango");
document.write("<br> Input: " + rangoEdad)

rangoEdad.setAttribute("type", "color");
// modificando el atributo de tipo del input
// set atribute requiere: atributo a modificar, nuevo valor

