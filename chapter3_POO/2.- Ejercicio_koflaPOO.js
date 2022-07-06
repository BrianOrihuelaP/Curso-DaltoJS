// *EJERCICIO PARTE 3*
// Cofla ya tiene su nuevo celular y ahora esta mirando las apps existentes en la play store ya que quiere jugar juegos 
// que sean muy populares, que tengan buena puntuación y que pesen relativamente poco, pero las 7 apps que llamaron su atencion 
// son un tanto similares y sabe que si descarga todas, probablemente juegue con todas, por eso solo quiere descargar solo dos 
// para tener perdidas innecesarias de tiempo jugando.

// Crear la siguiente solucion:

//  - Crear un sistema que ayude a Cofla a decidir por cual app descargar
//  -La informacion de los instladores debe de contener la cantidad de descargas, la puntuacion del juego y el peso.
//  -Las apps se deben de poder instalar, abrir, cerrar y desinstalar;

class androidGames {
    constructor(nombre, descargas, puntuacion, peso) {
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.active = false;
        this.installed = false;
    }

    instalar = () => {
        if (this.installed == true) {
            return `App currently installed`;
        } else {
            this.installed = true;
            return `Installing app ${this.nombre}, this will take a few seconds...`;
        }
    }

    abrir = () => {
        if (this.installed == true) {
            if (this.active == true) {
                return `The app ${this.nombre} is currently open`;
            } else {
                this.active = true;
                return `Opening ${this.nombre}, please wait...`;
            }
        } else {
            return `ERROR: This app doesn´t exist!`
        }

    }

    cerrar = () => {
        if (this.installed == true) {
            if (this.active == false) {
                return `This app cannot close, to close this must be open`;
            } else {
                this.active = false;
                return `The app ${this.nombre} now is close...`;
            }
        } else {
            return `ERROR: This app doesn´t exist!`
        }
    }

    desinstalar = () => {
        if (this.installed == false) {
            return `This app doesn´t installed`;
        } else {
            this.installed = false;
            return `Uninstalling the app ${this.nombre}, please wait...`;
        }
    }

    getInfo = () => {
        return `Nombre: ${this.nombre} ; Descargas: ${this.descargas}
                     Puntuacion: ${this.puntuacion} ; Peso: ${this.peso}`;
    }
}

const codMobile = new androidGames("Call of Duty Mobile", "+100M", "4.3", "13 GB");
const Apex = new androidGames("Apex Legends Mobile", "+10M", "4.6", "6 GB");

console.log(Apex);
console.log(Apex.getInfo());
console.log(Apex.abrir());
console.log(Apex.desinstalar());
console.log(Apex.instalar());
console.log(Apex.cerrar());
console.log(Apex.abrir());
console.log(Apex.cerrar());
console.log(Apex.instalar());
console.log(Apex.desinstalar());
console.log(Apex);
