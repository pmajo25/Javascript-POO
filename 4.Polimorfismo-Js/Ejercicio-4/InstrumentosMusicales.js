// Clase Guitarra
class Guitarra {
    constructor(cuerdas, tipo, marca) {
        this.cuerdas = cuerdas;
        this.tipo = tipo;
        this.marca = marca;
    }

    tocar() {
        output.innerHTML += `Soy una guitarra de ${this.cuerdas} cuerdas<br>`;
        output.innerHTML += `Tipo ${this.tipo}<br>`;
        output.innerHTML += `De la marca ${this.marca}<br><br>`;
    }
}

// Clase Piano
class Piano {
    constructor(teclas, tipo, marca) {
        this.teclas = teclas;
        this.tipo = tipo;
        this.marca = marca;
    }

    tocar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `Soy un piano con ${this.teclas} teclas<br>`;
        output.innerHTML += `Tipo ${this.tipo}<br>`;
        output.innerHTML += `De la marca ${this.marca}<br><br>`;

    }
}

// Clase Trompeta
class Trompeta {
    constructor(material, afinacion, marca) {
        this.material = material;
        this.afinacion = afinacion;
        this.marca = marca;
    }

    tocar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `Soy una trompeta de ${this.material}<br>`;
        output.innerHTML += `Afinación en ${this.afinacion}<br>`;
        output.innerHTML += `De la marca ${this.marca}<br><br>`;
    }
}

// Función que utiliza polimorfismo para tocar cualquier instrumento
function tocar_instrumento(instrumento) {
    instrumento.tocar();
}

// Instancias de cada clase
const guitarra = new Guitarra(6, "Acústica", "Yamaha");
const piano = new Piano(88, "De cola", "Steinway");
const trompeta = new Trompeta("Latón", "Si bemol", "Bach");

// Llamado al método tocar para cada objeto usando polimorfismo
tocar_instrumento(guitarra);
tocar_instrumento(piano);
tocar_instrumento(trompeta);