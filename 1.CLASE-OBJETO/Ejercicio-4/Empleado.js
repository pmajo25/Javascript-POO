//Defino la clase 
class Empleados {
    // Método constructor
    constructor(nombre, cargo, salario, edad, departamento) {
        this.nombre = nombre; //Propiedades para la instancia
        this.cargo = cargo;
        this.salario = salario;
        this.edad = edad;
        this.departamento = departamento;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Info. del Empleado<h3><br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("Cargo: " + this.cargo + "<br>")
        document.write("Edad: " + this.edad + "<br>")
        document.write("Salario: " + this.salario + "<br>")
        document.write("Departamento: " + this.departamento + "<br>")
        document.write("<hr>")
    }

    // Método para saber si el empleado ya tomó notas
    notas() {
        let nota = parseInt(prompt("Digite cuántas horas llevas sin tomar notas: "));

        // Evaluamos si el empleado ya debe tomar o no las notas
        if (nota > 2) {
            document.write(this.nombre + " ya se han cumplido las horas.<br>");
            document.write("||||||||||| Debes tomar nota y actualizar datos. <br> ");
            document.write("<hr>")
        } else {
            document.write(this.nombre + " aún falta para tomar nueva nota. <br>");
            document.write("||||||||||| Recuerda que debes tomar nota cada 2 horas. <br> ");
            document.write("<hr>");
        }
    }
}

// Creamos los objetos a partir de instanciar la clase Empleados
const objeto1 = new Empleados("Carlos", "Fábrica", "4000 USD", "30 años", "Fabricación");
const objeto2 = new Empleados("Adriana", "Jefe de cocina", "5000 USD", "25 años", "Cocina");
const objeto3 = new Empleados("Lucia", "Jefe de enfermería", "3500 USD", "29 años", "Enfermería");

// Mostrar los detalles de cada objeto
objeto1.mostrarDetalles();
objeto1.notas(); // Método que evalúa si ya tomó notas el empleado
objeto2.mostrarDetalles();
objeto2.notas();
objeto3.mostrarDetalles();
objeto3.notas();