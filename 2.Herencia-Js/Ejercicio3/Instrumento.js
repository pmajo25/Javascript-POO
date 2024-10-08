class Instrumento {
    // Constructor
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = prompt("Digite el precio del instrumento: ");
    }

    // Método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>REGISTRAR INSTRUMENTO</div>");
        document.write("<hr>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Material: " + this.material + "<br>");
        document.write("Precio: " + this.precio + " pesos<br>");
        document.write("<hr>");
        
    }
}

class Guitarra extends Instrumento { // Subclase guitarra
    // Constructor
    constructor(tipo, marca, material) {
        super(tipo, marca, material); // Super clase heredada
        this.numeroCuerdas = prompt("Digite número de cuerdas: ");
        this.acordesBasicos = prompt("Digite los acordes básicos que conozca: ");
    }

    // Método privado
    tocarGuitarra() {
        document.write(`<div class="alert alert-success" role="alert">Usted está tocando maravillosamente la guitarra ${this.marca} con los acordes: ${this.acordesBasicos} </div>`);
    }
}

// Instanciando la subclase Guitarra
const guitarra = new Guitarra('Guitarra eléctrica', 'Fender', 'Aliso');
guitarra.registrar(); // Registrando la guitarra
guitarra.tocarGuitarra(); // Tocando la guitarra
