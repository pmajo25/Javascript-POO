class Reloj {
    // Constructor
    constructor(marca, tipo, material) {
        this.marca = marca;
        this.tipo = tipo;
        this.material = material;
        this.precio = prompt("Digite el precio del reloj: ");
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>REGISTRAR RELOJ</div>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Material: " + this.material + "<br>");
        document.write("Precio: " + this.precio + " pesos<br>");
        document.write("<hr>");
    }
}

class RelojInteligente extends Reloj {
    // Constructor
    constructor(marca, tipo, material) {
        super(marca, tipo, material); // Super clase heredada
        this.t_pantalla = prompt("Digite el tipo de pantalla (Por ejemplo, OLED): ");
        this.s_operativo = prompt("Digite el sistema operativo del reloj (Por ejemplo, Wear OS): ");
    }

    // Método privado
    encender() {
        const energia = prompt("¿Quiere encender su reloj inteligente? (Sí/No): ");
        
        if (energia.toLowerCase() === "si") {
            document.write(`<div class="alert alert-success" role="alert">Su reloj ${this.marca} con pantalla ${this.t_pantalla} y sistema operativo ${this.s_operativo} está encendido </div>`);
        } else {
            document.write(`<div class="alert alert-danger" role="alert">Su reloj permanece apagado </div>`);
        }
    }
}

// Instanciando la subclase RelojInteligente
const relojInteligente = new RelojInteligente('Garmin', 'Smartwatch', 'Titanio');
relojInteligente.registrar(); // Registrando el reloj inteligente
relojInteligente.encender();  // Encendiendo el reloj inteligente
