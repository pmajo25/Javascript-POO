class Dispositivo {
    // Constructor
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.bateria = prompt("Digite la capacidad de la batería (mAh): ");
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>REGISTRAR DISPOSITIVOS</div>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Año: " + this.año + "<br>");
        document.write("Batería: " + this.bateria + " mAh<br>");
        document.write("<hr>");
    }
}

class Smartphone extends Dispositivo {
    // Constructor
    constructor(marca, modelo, año) {
        super(marca, modelo, año); // Super clase heredada
        this.sistema = prompt("Sistema operativo: (iOS/Android): ");
        this.conectividad = prompt("Tipo de conectividad: (4G/5G): ");
    }

    // Método privado
    encender() {
        const energia = prompt("¿Quiere encender su celular? (Sí/No): ");
        
        if (energia.toLowerCase() === "si") {
            document.write(`<div class="alert alert-success" role="alert">Su celular ${this.marca} de modelo ${this.modelo} del año ${this.año} está encendida </div>`);
        } else {
            document.write(`<div class="alert alert-danger" role="alert">Su celular permanece apagado</div>`);
        }
    }
}

// Instanciando la subclase Smartphone
const objetoCelular = new Smartphone('Apple', 'iPhone 15 Pro', '2023');
objetoCelular.registrar(); // Registrando el Smartphone
objetoCelular.encender();   // Encendiendo el Smartphone
