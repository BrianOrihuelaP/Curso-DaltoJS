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

const rangoEdad = document.querySelector(".rango");
document.write("<br> Input: " + rangoEdad)

 // -setAttribute() = Modifica el valor de un atributo
rangoEdad.setAttribute("type", "range");
// modificando el atributo de tipo del input
// si no cuenta alguna etiqueta HTML entonces añade el atributo
// set atribute requiere: atributo a modificar, nuevo valor

// -getAttribute() = obtiene el valor de un atributo
document.write("<br> Atributo de la etiqueta input (JS) : " + rangoEdad.getAttribute("type"));

 // -removeAttribute() =  Remueve el valor de un atributo
//  rangoEdad.removeAttribute("type")
//  elimina el atributo type del html haciendo inutil el input

// * 30) Atributos globales
//   -class = lista de clases del elemento separadas por espacios --> VISTO
//   -id = define un identificador único. --> VISTO

//   -contenteditable = indica si el elemento puede ser modificable por el usuario(bool)------------------------------------------
let titulo = document.querySelector(".titulo");
titulo.setAttribute("contenteditable","true");

//   -dir = indica la direccionalidad del texto----------------------------------------------------------------------------------
// titulo.setAttribute("dir","ltr");
// esta propiedad indica la direccion del texto tal cual que la proppiedad en CSS ltr, rtl

//   -hidden = indica si el elemento es o no relevante.------------------------------------------------------------------------------------------------
// titulo.setAttribute("hidden","false");
// para ocultar el elemento tal cual como en CSS

//   -tabindex = indica si el elemento puede obtener un focus de input-----------------------------------------------------------
let tabindex = document.querySelector(".seleccion");
tabindex.setAttribute("tabindex","0");
// con esta instruccion podemos seleccionar el documento al tabular

//   -title =  contiene un texto con información relacionada al elemento al que pertenece.------------------------------------------------
tabindex.setAttribute("title","Atributo title puesto en js")
