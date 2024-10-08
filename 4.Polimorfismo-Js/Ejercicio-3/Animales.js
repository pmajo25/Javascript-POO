// Clase Perro
class Perro {
    constructor(nombre, especie, edad, peso) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.peso = peso;
    }

    sonido() {
        output.innerHTML += "¡Guau, guau!<br>";
        output.innerHTML += `Mi nombre es ${this.nombre}, soy de especie ${this.especie}<br>`;
        output.innerHTML += `Tengo: ${this.edad} años<br>`;
        output.innerHTML += `Peso: ${this.peso}<br><br>`;
    }
}

// Clase Gato
class Gato {
    constructor(nombre, especie, edad, peso) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.peso = peso;
    }

    sonido() {
        output.innerHTML += "<hr>";
        output.innerHTML += "¡Miau, miau!<br>";
        output.innerHTML += `Mi nombre es ${this.nombre}, soy de especie ${this.especie}<br>`;
        output.innerHTML += `Tengo: ${this.edad} años<br>`;
        output.innerHTML += `Peso: ${this.peso}<br><br>`;
    }
}

// Clase Pájaro
class Pajaro {
    constructor(nombre, especie, edad, peso) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.peso = peso;
    }

    sonido() {
        output.innerHTML += "<hr>";
        output.innerHTML += "¡Pío, pío!<br>";
        output.innerHTML += `Mi nombre es ${this.nombre}, soy de especie ${this.especie}<br>`;
        output.innerHTML += `Tengo: ${this.edad} años<br>`;
        output.innerHTML += `Peso: ${this.peso}<br><br>`;
    }
}

// Función que utiliza polimorfismo para mostrar el sonido de cualquier animal
function sonido_animal(animal) {
    animal.sonido();
}

// Instancias de cada clase
const objetoPerro = new Perro("Simba", "Canis familiaris", "7", "20 kg");
const objetoGato = new Gato("Pardo", "Felis catus", "3", "4 kg");
const objetoPajaro = new Pajaro("Ruby", "Serinus canaria", "2", "0.03 kg");

// Llamado al método sonido para cada objeto
sonido_animal(objetoPerro);
sonido_animal(objetoGato);
sonido_animal(objetoPajaro);