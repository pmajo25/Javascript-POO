class Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoElectrico = prompt("Digite el consumo eléctrico en kWh: ");
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>REGISTRAR ELECTRODOMÉSTICO</div>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Capacidad: " + this.capacidad + "<br>");
        document.write("Consumo: " + this.consumoElectrico + " kWh <br>");
        document.write("<hr>");
    }
}

class Refrigerador extends Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        super(marca, color, capacidad); // Super clase heredada
        this.tipo = prompt("Tipo de refrigerador (Por ejemplo, No Frost): ");
        this.temperatura = prompt("Digite la temperatura en grados °C: ");
    }

    // Método privado
    ajustarTemperatura() {
        const tAjustada = prompt("Digite la nueva temperatura a ajustar: ");
        document.write(`<div class="alert alert-success" role="alert">La temperatura de su refrigerador ${this.marca} de color ${this.color} se ajustó a: ${tAjustada}°C </div>`);
    }
}

// Instanciando la subclase Refrigerador
const objetoRefrigerador = new Refrigerador('Samsung', 'Acero inoxidable', '27 pies cúbicos');
objetoRefrigerador.registrar(); // Registrando el refrigerador
objetoRefrigerador.ajustarTemperatura(); // Ajustando la temperatura del refrigerador