// ¿QUE ES UNA CLASE?
// Es una plantilla para el objetivo de la creación de objetos de datos según un modelo predefinido. Las clases se utilizan para 
// representar entidades o conceptos, como los sustantivos en el lenguaje. Cada clase es un modelo que define un conjunto de variables 
// y métodos apropiados para operar con dichos datos. Cada objeto creado a partir de la clase se denomina instancia de la clase.

class animal {
    constructor(especie,edad,color){
        // la palabra this hace referencia a que se creara un atributo del objeto especifico creado
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    // metodo: 
    getInfo = () => {
        return `Soy un ${this.especie}, tengo ${this.edad} y soy de color: ${this.color}`
    }
    // Como no todas las especies pueden ladrar, se debe de hacer una clase especial que me permita tener el metodo, para esto ocuparemos la herencia
    // ladrar = () => {
    //     if (this.especie == "perro" || this.especie == "can" || this.especie == "canino") {
    //         return `Wow!!! Wow!!1 AUUUUU!!!`;
    //     }else{
    //         return `No puedo ladrar soy un ${this.especie}`
    //     }
    // }
}

// creacion de un objeto, por ende se hace la instanciación de la clase
const gato = new animal("felino", "7", "negro");

// accediendo a los atributos del objeto
console.log(gato);
console.log(gato.color);
console.log(gato.edad);
console.log(gato.getInfo());
// console.log(gato.ladrar());

//----------------------------------------------------------------------------------------------------------

// ABSTRACCION: 

// La abstracción consiste en seleccionar datos de un conjunto más grande para mostrar solo los detalles relevantes del objeto. 
// Ayuda a reducir la complejidad y el esfuerzo de programación.
// *Resumido* : resumir las propiedades de un objeto para facilitar el manejo de este

// MODULARIDAD:
// Un módulo es una porción de un programa de ordenador. De las varias tareas que debe realizar un programa para cumplir con su 
// función u objetivos, un módulo realizará, comúnmente, una de dichas tareas (o varias, en algún caso).
// *Resumido* : Separar el problema para una mejor resolucion, "DIVIDE Y VENCERAS"

// ENCAPSULAMIENTO: 
// El encapsulamiento usa las técnicas de la ocultación para aislar el objeto del exterior. Este aislamiento hace que los datos 
// (propiedades) del objeto sólo pueden gestionarse con los operaciones (métodos) definidos en ese objeto.
// *Resumido* : Aislameinto de las propiedades de cada objeto para manipularlos especificamente con metodos exclusivos hacia ellos

// POLIMORFISMO: 
// El polimorfismo es la habilidad que poseen los objetos para tener múltiples formas. Esto permite que las subclases tengan métodos 
// con el mismo nombre que los de sus superclases pero con diferentes implementaciones.
// *Resumido* : Capacidad cambiante que tienen los objetos de una misma clase al manipularlos


// HERENCIA********************************************************

class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }

     ladrar = () => {
        return "WAW WAW!!! AUUUUU!!!"
    }

    // Metodos estaticos, son aquellos que no usan las propiedades o atributos de un objeto
    static especie = () => {
        return "Canes";
    }
    //GETTERS & SETTERS => son metodos que se pueden tomar como propiedad de la clase 

    set modRaza(newRaza){
        this.raza = newRaza;
    }

    get getRaza(){
        return this.raza;
    }

}

const cooper = new perro("Canino", "12", "negro", "Rostweiller");

console.log(cooper);
console.log(cooper.getInfo());
console.log(cooper.ladrar());
console.log(perro.especie());
// llamando el metodo set
cooper.modRaza = "Doberman";
console.log(cooper);
// llamando el metodo get
console.log(cooper.raza);


