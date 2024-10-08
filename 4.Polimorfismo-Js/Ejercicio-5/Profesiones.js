// Clase Medico
class Medico {
    constructor(especialidad, hospital, años_experiencia) {
        this.especialidad = especialidad;
        this.hospital = hospital;
        this.años_experiencia = años_experiencia;
    }

    trabajar() {
        output.innerHTML += `Soy un médico especializado en ${this.especialidad}<br>`;
        output.innerHTML += `Trabajo en el hospital ${this.hospital}<br>`;
        output.innerHTML += `Y tengo ${this.años_experiencia} años de experiencia<br><br>`;
        
    }
}

// Clase Ingeniero
class Ingeniero {
    constructor(rama, empresa, proyectos_realizados) {
        this.rama = rama;
        this.empresa = empresa;
        this.proyectos_realizados = proyectos_realizados;
    }

    trabajar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `Soy un ingeniero de ${this.rama}<br>`;
        output.innerHTML += `Trabajo en la empresa ${this.empresa}<br>`;
        output.innerHTML += `Y he realizado ${this.proyectos_realizados} proyectos exitosos<br><br>`;
    }
}

// Clase Docente
class Docente {
    constructor(materia, nivel_educativo, años_enseñanza) {
        this.materia = materia;
        this.nivel_educativo = nivel_educativo;
        this.años_enseñanza = años_enseñanza;
    }

    trabajar() {
        output.innerHTML += "<hr>";
        output.innerHTML += `Soy un docente de ${this.materia}<br>`;
        output.innerHTML += `Enseño en el nivel ${this.nivel_educativo}<br>`;
        output.innerHTML += `Y tengo ${this.años_enseñanza} años de experiencia en la enseñanza<br><br>`;
    }
}

// Función que utiliza polimorfismo para describir el trabajo de cada profesional
function describir_profesion(profesional) {
    profesional.trabajar();
}

// Instancias de cada clase
const medico = new Medico("Cardiología", "Hospital Central", 15);
const ingeniero = new Ingeniero("Sistemas", "Tech Solutions", 10);
const docente = new Docente("Matemáticas", "Secundaria", 8);

// Llamado al método trabajar para cada objeto usando polimorfismo
describir_profesion(medico);
describir_profesion(ingeniero);
describir_profesion(docente);