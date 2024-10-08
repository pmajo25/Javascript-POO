class Electronico {
    // Constructor
    constructor(marca, modelo, procesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = prompt("Digite cantidad de memoria RAM (GB): ");
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>REGISTRAR ELECTRONICO</div>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Procesador: " + this.procesador + "<br>");
        document.write("RAM: " + this.ram + " GB<br>");
        document.write("<hr>");
    }
}

class Laptop extends Electronico { // Subclase Laptop
    // Constructor
    constructor(marca, modelo, procesador) {
        super(marca, modelo, procesador); // Super clase heredada
        this.discoDuro = prompt("Digite el tipo de disco duro: ");
        this.bateriaHoras = prompt("Digite la duración de la batería: ");
    }

    // Método privado
    encender() {
        const energia = prompt("¿Quiere encender su laptop? (Sí/No): ");
        
        if (energia.toLowerCase() === "si") {
            document.write(`<div class="alert alert-success" role="alert">La laptop ${this.marca} con el modelo ${this.modelo} y tipo procesador ${this.procesador} está encendida </div>`);
        } else {
            document.write(`<div class="alert alert-danger" role="alert">La laptop permanece apagada</div>`);
        }
    }
}

// Instanciando la subclase Laptop
const laptop = new Laptop('Dell', 'XPS 13', 'Intel Core i7');
laptop.registrar(); // Registrando la laptop
laptop.encender(); // Encendiendo la laptop
