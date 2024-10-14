// Clase base abstracta Empleado
class Empleado {
    constructor(nombre) {
        if (this.constructor === Empleado) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
        this.nombre = nombre;
    }

    // Método abstracto
    calcularSalario() {
        throw new Error("Método 'calcularSalario()' debe ser implementado");
    }
}

// Clase concreta EmpleadoTiempoCompleto que hereda de Empleado
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioMensual) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

// Clase concreta EmpleadoPorHoras que hereda de Empleado
class EmpleadoPorHoras extends Empleado {
    constructor(nombre, horasTrabajadas, pagoPorHora) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.pagoPorHora = pagoPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.pagoPorHora;
    }
}

// Uso de las clases
const empleadoTiempoCompleto = new EmpleadoTiempoCompleto("Andres", 1000000);
const empleadoPorHoras = new EmpleadoPorHoras("Pablo", 24, 10000);

const resultadoEmpleados = `
    <div class="alert alert-info">
        <p>Salario de ${empleadoTiempoCompleto.nombre}: ${empleadoTiempoCompleto.calcularSalario()}</p>
        <p>Salario de ${empleadoPorHoras.nombre}: ${empleadoPorHoras.calcularSalario()}</p>
    </div>
`;

// Mostrar en el HTML
document.getElementById("resultado").innerHTML = resultadoEmpleados;
