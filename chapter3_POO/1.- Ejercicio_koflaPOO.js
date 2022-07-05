// Ejercicio 1.-
//  Cofla entro a una tienda en la cual venden celulares porque le parecio bastante bueno cambiar de celular.
// De todos los modelos que hay disponibles en esta tienda, a Cofla le llamaron la atención 3 telefonos,
// el problema es que ningun vendedor sabe sobre telefonos por lo cual incluso uno le dijo que tenian 30 gigabytes de procesamiento.
// por lo cual sospecho Cofla.. pero claro el antes de comprar algunos de estos celulares quiere ver las especificaciones reales de cada celular
// es ahí donde entramos nosotros: 

// *Parte 1* --- Crear Soluciones
// a) Crear un sistemita para mostrarle a cofla las particularidades de los 3 celulares 
// b) Cada celular debe de tener color, peso, resolucion de pantalla, resolucion y sensor de camara, memoria RAM, ROM y Procesador.
// c) Cada celular debe de poder prender, reiniciar, apagar, tomar fotos y grabar.

class celulares {

    // Creando la clase celulares con las propiedades del problema y algunos mas 
    constructor(marca, modelo, color, peso, rePantalla, reCamara, sensorCamara, ram, rom, procesador) {
        // constructor que iniciara los atributos 
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.rePantalla = rePantalla;
        this.reCamara = reCamara;
        this.sensorCamara = sensorCamara;
        this.ram = ram;
        this.rom = rom;
        this.procesador = procesador;
        // nos apoyamos de estos dos atributos para la funcionalidad de los métodos
        this.bateria = 100;
        this.encendido = false;
    }

    prender() {
        // metodo que enciende o apaga el celular dependiendo del nivel de la bateria
        if (this.bateria == 100 && this.encendido == false) {
            this.bateria -= 2;
            this.encendido = true;
            return `Prendiendo... ${this.bateria}%`;
        } else if (this.bateria <= 20 && this.encendido == false) {
            this.bateria -= 2;
            this.encendido = true;
            return `Encendiendo... Bateria baja - ${this.bateria}%`;
        } else if (this.encendido == true) {
            // si se oprime el boton de prender y ya está encendido entonces apaga
            this.encendido = false;
            return `Apagando....`;
        }
    }

    reiniciar() {
        // metodo para reiniciar el celular, checa el estado de la bateria y reinicia
        if (this.bateria > 5) {
            this.bateria -= 2;
            this.encendido = true;
            return `Reiniciando ${this.modelo}`
        } else if (this.bateria >= 4 && this.bateria <= 2) {
            this.encendido = true;
            return `Reinciando... Bateria muy baja ${this.bateria}`
        } else {
            return `Bateria agotada ${this.bateria}`
        }
    }

    tomarFoto() {
        if (this.bateria >= 20) {
            this.bateria -= 1;
            return `"Tomando foto... ${this.sensorCamara}`
        } else {
            return `No se puede iniciar camara, bateria muy baja ${this.bateria}%`
        }
    }

    grabar() {
        if (this.bateria >= 20) {
            this.bateria -= 2;
            return `"Tomando video... Resolucion: ${this.reCamara} - ${this.sensorCamara}`
        } else {
            return `No se puede iniciar camara, bateria muy baja ${this.bateria}`
        }
    }

    mostrarCaracteristicas() {
        return `${this.marca} - ${this.modelo}
                Peso: ${this.peso} ; Pantalla: ${this.rePantalla}; Camara: ${this.reCamara}, ${this.sensorCamara}
                RAM: ${this.ram} ; ROM: ${this.rom}; SOC: ${this.procesador}`
    }

}

// instanciando la clase con el objeto redmi y sus atributos
const RedmiNote12 = new
    celulares("Xiaomi", "Redmi note 12 pro", "Gray", "192 gramos", "1080 x 2400 píxeles",
        "4K @ 30fps, 1080p @ 30/60 / 120fps, 720p @ 960fps", "Principal: 108 MP (ancho), f/1.9",
        "8 GB", "256 GB", "Snapdragon 768");

// mandando a llamar los metodos
console.log(RedmiNote12);
console.log(RedmiNote12.prender());
console.log(RedmiNote12.grabar());
// Simulando que se toman 40 fotos en el celular
for (let index = 0; index < 40; index++) {
    console.log(RedmiNote12.tomarFoto());
}
console.log(RedmiNote12.reiniciar());
console.log(RedmiNote12);
console.log(RedmiNote12.prender());
console.log("Caracteristicas Generales****************************");
console.log(RedmiNote12.mostrarCaracteristicas());

// *EJERCICIO PARTE 2*
// Cofla no quedo satisfecho con los celulares anteriores así que cambia de sección y decide ver en la seccion de celulares premium, gama alta, 
// pero tiene el mismo problema, los encargados no saben de celulares, pero le encantaron dos celulares, estos celulares ademas de tener las 
// mismas funcionalidades de los anteriores, estos graban en camara super lenta, cuentan con reconocimiento facial y carga rapida.
// *Parte 2* - Crear Soluciones
// - Implementar todas las cualidades anteriores ahora para celulares de gama alta

class celularGamaAlta extends celulares{
    constructor(marca, modelo, color, peso, rePantalla, reCamara, sensorCamara, ram, rom, procesador, slowMotion, recFacial, fastCharge) {
        super(marca, modelo, color, peso, rePantalla, reCamara, sensorCamara, ram, rom, procesador);
        this.slowMotion = slowMotion;
        this.recFacial = recFacial;
        this.fastCharge = fastCharge;
    }

    grabarSlow(){
        if (this.bateria >= 20) {
            this.bateria -= 2;
            return `"Tomando video en slow motion... Resolucion: ${this.reCamara} - ${this.slowMotion}  `
        } else {
            return `No se puede iniciar camara, bateria muy baja ${this.bateria}`
        }
    }

    mostrarCaracteristicasAltaGama(){
        return `${this.mostrarCaracteristicas()}; Carga Rapida: ${this.fastCharge}`
    }
}


const iPhone14 = new celularGamaAlta("Apple", "iPhone 14 pro Max", "Silver", "222 gramos", "1170 x 2532 pixels", "8K 30fps; 4k 60fps; 1080 120fps","48 Megapixeles, f 2.1", "4", "512", "A16 Bionic", "1200 fps", "Two Biometric 3D", "65 Watts");

// mandando a llamar los metodos
console.log("GAMA ALTA ********************");
console.log(iPhone14);
console.log(iPhone14.prender());
console.log(iPhone14.grabar());
// Simulando que se toman 40 fotos en el celular
for (let index = 0; index < 40; index++) {
    console.log(iPhone14.grabarSlow());
}
console.log(iPhone14.tomarFoto());
console.log(iPhone14.reiniciar());
console.log(iPhone14);
console.log(iPhone14.prender());
console.log("Caracteristicas Generales****************************");
console.log(iPhone14.mostrarCaracteristicasAltaGama());