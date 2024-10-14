// Clase abstracta TareaEmpleado con un método abstracto
class TareaEmpleado {
    constructor(nombre, apellido) {
        if (this.constructor === TareaEmpleado) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Método abstracto
    realizarTarea() {
        throw new Error("Método 'realizarTarea()' debe ser implementado");
    }
}

// Clase Ingeniero que hereda de TareaEmpleado
class Ingeniero extends TareaEmpleado {
    constructor(nombre, apellido) {
        super(nombre, apellido);
    }

    realizarTarea() {
        return `${this.nombre} ${this.apellido} está realizando su nuevo proyecto en JavaScript.`;
    }
}

// Clase Doctor que hereda de TareaEmpleado
class Doctor extends TareaEmpleado {
    constructor(nombre, apellido) {
        super(nombre, apellido);
    }

    realizarTarea() {
        return `${this.nombre} ${this.apellido} está evaluando el estado de salud de su paciente.`;
    }
}

// Uso de las clases
const ingeniero = new Ingeniero("María", "Paternina");
const doctor = new Doctor("Juan", "Vargas");

const resultadoTareas = `
    <div class="alert alert-info">
        <p>La ingeniera: ${ingeniero.realizarTarea()}</p>
        <p>El doctor: ${doctor.realizarTarea()}</p>
    </div>
`;

// Mostrar en el HTML
document.getElementById("resultado").innerHTML = resultadoTareas;
