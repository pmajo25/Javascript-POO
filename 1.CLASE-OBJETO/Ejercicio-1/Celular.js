//Defino la clase 
class Celular {
    //Método constructor
    constructor(nombre, marca, imei, bateria, camara, color) {
        this.nombre = nombre //Propiedades para la instancia
        this.marca = marca
        this.imei = imei
        this.bateria = bateria
        this.camara = camara
        this.color = color

    }
    //Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Info. del Celular<h3><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Marca: " + this.marca + "<br>")
        document.write("IMEI: " + this.imei + "<br>")
        document.write("Bateria: " + this.bateria + "<br>")
        document.write("Camara: " + this.camara + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("<hr>")
    }

    //Método para encender el celular
    encender() {
        //Atributo privado solo para el método encender
        let energia = parseInt(prompt("Digite el valor de la carga: "));
        // Evaluamos so tiene carga el celular
        if (energia > 0) {
            document.write("El celular: " + this.nombre + " se puede encender <br>");
            document.write(`||||||||| ${energia} % de carga <br>`);
            document.write("<hr>");
        } else {
            document.write("El celular: " + this.nombre + " no se puede encender <br>");
            document.write(`||||||||| ${energia} % de carga <br>`);
            document.write("<hr>");
        }
    }
}



//Creación de objetos por medio de instanciar la clase Celular
let objeto1 = new Celular("Redmi Note 8", "Xiaomi", 123456789111, "4000 mAh", "48 px", "Azul")
let objeto2 = new Celular("Samsung Galaxy S21", "Samsung", 2867861, "5000 mAh", "64 px", "Negro")
let objeto3 = new Celular("iphone 13", "Apple", 356789123999, "3240 mAh", "12 px", "Blanco")

//Mostrar los detalles de cada objeto
objeto1.mostrarDetalles()
objeto1.encender()
objeto2.mostrarDetalles()
objeto2.encender()
objeto3.mostrarDetalles()
objeto3.encender()
