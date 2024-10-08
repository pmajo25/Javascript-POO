//Defino la clase 
class Moto {
    // Método constructor
    constructor(marca, modelo, año, cilindrada, color) {
        this.marca = marca; //Propiedades para la instancia
        this.modelo = modelo;
        this.año = año;
        this.cilindrada = cilindrada;
        this.color = color;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Info. de la Moto<h3><br>")
        document.write("Marca: " + this.marca + "<br>")
        document.write("Modelo: " + this.modelo + "<br>")
        document.write("Año: " + this.año + "<br>")
        document.write("Cilindrada: " + this.cilindrada + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("<hr>")
    }

    // Método para saber la velocidad de la Moto y cuando frenar
    velocidades() {
        let velocidad = parseInt(prompt("Digite en cuánto tiene su velocidad: "));

        // Evaluamos si la moto tiene mucha velocidad o está normal
        if (velocidad > 80) {
            document.write("La moto " + this.marca + " tiene mucha velocidad. <br>");
            document.write("||||||||||| Usted debe frenar y bajar su velocidad. <br>");
            document.write("<hr>")
        } else {
            document.write("La moto " + this.marca + " tiene una velocidad normal. <br>");
            document.write("<hr>")
        }
    }
}

// Creamos los objetos a partir de instanciar la clase Moto
const objeto1 = new Moto("Yamaha", "YZF-R6", "2020", "600 cc", "Azul");
const objeto2 = new Moto("Ducati", "Panigale V4", "2021", "1103 cc", "Rojo");
const objeto3 = new Moto("Kawasaki", "Ninja H2", "2021", "998 cc", "Verde");

// Mostrar los detalles de cada objeto
objeto1.mostrarDetalles();
objeto1.velocidades(); // Método que evalúa la velocidad de la Moto
objeto2.mostrarDetalles();
objeto2.velocidades();
objeto3.mostrarDetalles();
objeto3.velocidades();