// Clase Carro
class Carro {
    constructor(marca, modelo, año, color, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.motor = motor;
    }

    descripcion() {
        output.innerHTML += "Soy un carro <br>";
        output.innerHTML += `Mi marca es ${this.marca} con modelo ${this.modelo}<br>`;
        output.innerHTML += `Soy del año: ${this.año}<br>`;
        output.innerHTML += `Mi color es: ${this.color}<br>`;
        output.innerHTML += `Y tengo un motor de ${this.motor}<br><br>`;
    }
}

// Clase Moto
class Moto {
    constructor(marca, modelo, año, cilindrada, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cilindrada = cilindrada;
        this.color = color;
    }

    descripcion() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Soy una moto <br>";
        output.innerHTML += `Mi marca es ${this.marca} con modelo ${this.modelo}<br>`;
        output.innerHTML += `Soy del año: ${this.año}<br>`;
        output.innerHTML += `Tengo una cilindrada de: ${this.cilindrada}<br>`;
        output.innerHTML += `Mi color es: ${this.color}<br><br>`;
    }
}

// Clase Bicicleta
class Bicicleta {
    constructor(color, tamaño, tipo_frenos, tipo_llantas, peso) {
        this.color = color;
        this.tamaño = tamaño;
        this.tipo_frenos = tipo_frenos;
        this.tipo_llantas = tipo_llantas;
        this.peso = peso;
    }

    descripcion() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Soy una bicicleta <br>";
        output.innerHTML += `Mi color es ${this.color}, tengo un tamaño ${this.tamaño}<br>`;
        output.innerHTML += `Mi tipo de frenos es: ${this.tipo_frenos}<br>`;
        output.innerHTML += `Mi tipo de llantas es: ${this.tipo_llantas}<br>`;
        output.innerHTML += `Peso: ${this.peso}<br>`;
       
    }
}

// Función que utiliza polimorfismo para mostrar la descripción de cualquier vehículo
function mostrar_descripcion(vehiculo) {
    vehiculo.descripcion();
}

// Instancias de cada clase
const objetoCarro = new Carro("Toyota", "Camry", "2021", "Gris", "2.5L");
const objetoMoto = new Moto("Ducati", "Panigale V4", "2021", "1103 cc", "Rojo");
const objetoBicicleta = new Bicicleta("Rojo", "Mediano (17 pulgadas)", "Disco", "Montaña", "12 kg");

// Llamado al método descripcion para cada objeto
mostrar_descripcion(objetoCarro);
mostrar_descripcion(objetoMoto);
mostrar_descripcion(objetoBicicleta);