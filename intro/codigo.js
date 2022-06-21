
let recipiente = "papel";
string = "cadena de texto"
var number= 19
booleano = true

// Métodos de declaracion de variables: 
// var, let, const
// const es una variable constante por lo tanto NUNCA va a cambiar su valor, se define solamente una vez
// declarando un variable let

const persona = "Brian";
// las constantes se deben inicializar en la misma linea de la declaracion
let numero; 
// declarando
numero = 23;
// inicianizando
//  esta variable solo tiene un alcance local

// SCOPE: Limitacion de valores y/o variables en su contexto
// Hoisting es la manera que nos indica como se ejecutan las partes del codgo

let numero2 = null; //variable vacia

let number0 = 5, number1 = "Ulises";
let multiplicacion = number0 * number1; //esto genera NaN

// NaN significa Non a Number lo cual nos indica que no podemos combinar los datos
// let nombre = prompt("Decime tu nombre: ")
// alert("Hola estimad@ " + nombre);
// OPERADORES de asignacion ***********************************************************
let x=16, x0 = 12;
x += 9;
x0 -= 10;

resultado = x;
resultado0 = x0;
document.write("<br><br>");
document.write(resultado);

document.write("<br><br>");
document.write(resultado0);

x0 *=10; //multiplicacion
resultado0 = x0;
document.write("<br><br>");
document.write(resultado0);

x0 %= 2; //devuelve el residuo de la div en entero
resultado0 = x0;
document.write("<br><br>");
document.write(resultado0);
x0 += 5;
x0 **=2; //Elevacion a potencia (2) => 5 * 5 = 25
resultado0 = x0;
document.write("<br><br>");
document.write(resultado0);

//Operadores aritmeticos ***********************************************************

numeros0 = 20, numeros1 = 30;
Suma = numeros0 + numeros1;
// alert("Suma : " + Suma)

resta = numeros0 + numeros1;
// alert("resta : " + resta)
//PRE Y POST DECREMENTO
numeros0--; //primero asigna yluego resta
//--numeros0 = prioriza la resta
resultadoResta = numeros0;
// alert("Quitando una unidad: " + resultadoResta)
//divicion
div = numeros0 / numeros1;
// alert("Div: " + div)
//exponenciacion

exponente = numeros0**numeros1;
// alert("Exponentes: " + exponente)

resto = 3&3;
// alert("Resto: " + resto)

//concatenacion *************************************************

saludo = "Hola Pedro " + "que gusto de verteee!;  ";
pregunta = "Supe que era Lic."

frase = saludo + pregunta;

document.write("<br><br>");
document.write(frase);

//Forzar concatenacion con numeros : 

num0 = 80;
num1 = 7;

resultado0 = "" + num0 + num1;
document.write("<br><br>");
document.write("Numeros concatenados: " + resultado0);

frase1 = "Hola Luke"
frase2 = "Yo soy tu padre!!!"
//sin backticks
frase3 = frase1 + " Skywalker " + frase2
document.write("<br><br>");
document.write("CONCATENACIÓN DE CADENAS");
document.write("<br><br>");
document.write(frase3);

//con backticks
fraseConcatenada = `Frase de StarWars: 
                    ${frase3}`;
document.write("<br><br>");
document.write(fraseConcatenada);

//escape de comillas dobles y simples:
frase1 = 'Nombre de el mandaloriano: "Mando"';
frase2 = "Nombre del la especie que cuida: 'Grogu'"
document.write("<br><br>");
//si se usa comilla doble dentro del texto se debe de usar comilla simple, si se va a usar la c. simple entonces usamos doble y viceversa

//OPERADORES LOGICOS Y DE COMPARACION
let a =18;
let b = 13;

//operador de comparacion "true o false"
if(a == b){ 
    document.write("A es igual que b = ");
    document.write(a == b)
}else{
    document.write("B no es igual A = ");
    document.write(a != b)
}
document.write("<br><br>");
//operador de identidad, que sean exactamente iguales:::

let x2 = 23;
let y = "23";

document.write(`23 es igual que "23":  ${x2 == y} => "OPERADOR DE COMPARACION (==)"`) //DESIGUALDAD !=
document.write("<br><br>");
document.write(`23 es igual que "23":  ${x2 === y} => "OPERADOR DE IDENTIDAD (===)"`) //DESIGUALDAD !==

//OPERADORES DE COMPARACION
x2 =10
x1 =3
resultado = x1 > x2
document.write("<br><br>");
document.write(`Numero ${x1} es mayor que ${x2}: ${resultado}`);

document.write("<br><br>");
document.write(`Numero ${x1} es menor que ${x2}: ${x1 < x2}`);