// Defino la clase
class Carro {
    //Método constructor
    constructor(marca, modelo, año, color, motor) {
        this.marca = marca; //Propiedades para la instancia
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.motor = motor;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Info. del Carro<h3><br>")
        document.write("Marca: " + this.marca + "<br>" )
        document.write("Modelo: " + this.modelo + "<br>")
        document.write("Año: " + this.año + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("Motor: " + this.motor + "<br>")
        document.write("<hr>")
    }

    // Método para saber la velocidad del carro y cuándo frenar
    velocidad() {
        // Solicitar al usuario la velocidad del carro
        let frenar = prompt("Digite en cuánto tiene su velocidad:");

        // Evaluamos si el carro tiene mucha velocidad o está en un rango normal
        if (frenar > 80) {
            document.write("El carro " + this.marca + " tiene mucha velocidad. <br>");
            document.write("||||||||||| Usted debe frenar y bajar su velocidad <br>");
            document.write("<hr>")
        } else {
            document.write("El carro " + this.marca + " tiene una velocidad normal <br>");
            document.write("<hr>")
        }
    }
}

// Crear los objetos a partir de instanciar la clase Carro
let objeto1 = new Carro("Toyota", "Camry", "2021", "Gris", "2.5L");
let objeto2 = new Carro("Ford", "Ranger", "2019", "Blanco", "3.2L");
let objeto3 = new Carro("Tesla", "Model S", "2022", "Rojo", "Eléctrico");

// Mostrar los detalles de cada objeto y evaluar la velocidad
objeto1.mostrarDetalles();
objeto1.velocidad();
objeto2.mostrarDetalles();
objeto2.velocidad();
objeto3.mostrarDetalles();
objeto3.velocidad();