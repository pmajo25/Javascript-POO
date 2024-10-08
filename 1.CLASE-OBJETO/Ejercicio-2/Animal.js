// Defino la clase
class Animal {
   //Método constructor
    constructor(nombre, especie, edad, peso, habitad) {
        this.nombre = nombre //Propiedades para la instancia
        this.especie = especie
        this.edad = edad
        this.peso = peso
        this.habitad = habitad
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Info. del Animal<h3><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Especie: " + this.especie + "<br>")
        document.write("Edad: " + this.edad + "<br>")
        document.write("Peso: " + this.peso + "<br>")
        document.write("Hábitat: " + this.habitad + "<br>")
        document.write("<hr>")
    }

    // Método para saber si el animal ya descansó lo suficiente
    animales() {
        // Solicitar al usuario cuánto tiempo lleva durmiendo el animal
        let dormir = prompt("Digite cuánto tiempo lleva su mascota durmiendo:");

        // Evaluamos si el animal ya descansó lo suficiente
        if (dormir > 10) {
            document.write(this.nombre + " ya debe despertar. <br>");
            document.write(`||||||||| Ya descanso lo suficiente <br>`);
            document.write("<hr>")
        } else {
            document.write(this.nombre + " debe seguir descansando. <br>");
            document.write(`||||||||| Aun no ha descansado lo suficiente <br>`);
            document.write("<hr>")
        }
    }
}

// Crear los objetos a partir de instanciar la clase Animal
let objeto1 = new Animal("Simba", "León", "7 años", "190 kg", "Sabana");
let objeto2 = new Animal("Pardo", "Oso", "10 años", "600 kg", "Bosques");
let objeto3 = new Animal("Ruby", "Gacela", "4 años", "50 kg", "Sabana");

// Mostrar los detalles de cada objeto y evaluar si ya ha descansado
objeto1.mostrarDetalles();
objeto1.animales();
objeto2.mostrarDetalles();
objeto2.animales();
objeto3.mostrarDetalles();
objeto3.animales();