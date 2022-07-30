// CONTINUACION..........................................

// * 31) Atributos de Inputs
//      -className
//      -value
//      -type
//      -accept
//      -form
//      -minlength - desde HTML
//      -placeholder
//      -required

let input = document.querySelector(".input-normal");
document.write("<br> Elemento obtenido: " + input + " --> Clase del objeto: " + input.className);
document.write("<br> Valor del input: " + input.value);
document.write("<br> Valor de input.type: " + (input.type = "color"));
// con input.type accedemos y podemos cambiar su atributo al igual que setAttribute("type", "range");


let input2 = document.querySelector(".archivo");
input2.accept = "image/png";
// para pedir solamente este tipo de archivos

let input3 = document.querySelector(".p1");
input3.setAttribute("minlength", "2");
// colocando la validacion a 2 caracteres

input3.placeholder = "Que pasa crack!";
// colocando el placeholder del elemento

input3.required = " ";
// estamos validando el elemento desde js


// * 32) Atributo Style
//      -usos y ejemplos
//      -propiedades Camel Case