// Clase Personas con atributos privados
class Personas {
    //metodo constructor
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo){
        this._nombres = nombres; // Privado (converción en JS usando _)
        this._apellidos = apellidos; // privado
        this._identidad = identidad; // privado
        this.fechanacimiento = fechanacimiento; //público
        this.sexo = sexo; //público
    }

    // Método getter para nombres
    obtenerNombres(){
        return this._nombres;
    }

    //Método getter para apellidos
    obtenerApellidos(){
        return this._apellidos;
    }

    //Método getter para identidad
    obtenerIdentidad(){
        return this._identidad;
    }

    //Método setter para nombres
    establecerNombres(nuevoNombres){
        this._nombres = nuevoNombres;
    }

    //Método setter para apellidos
    establecerApellidos(nuevoApellidos){
        this._apellidos = nuevoApellidos;
    }

    //Método para mostrar detalles del objetos
    mostrarDetalles(){
        document.write(`\nNombres: ${this._nombres}<br>`);
        document.write(`Apellidos: ${this._apellidos}<br>`);
        document.write(`N° Identidad: ${this._identidad}<br>`);
        document.write(`Fecha nacimiento: ${this.fechanacimiento}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
    }
}

//Objeto
const persona = new Personas("Jorge","Rojas",1102345678,"14/09/2000","M");

//Imprimir atributos públicos y privados
persona.mostrarDetalles();

document.write("<hr>");

//Modificar atributos encapsulados usando setters y obtener con getters
persona.establecerNombres("Carlos"); //setter
document.write(`Nombres: ${persona.obtenerNombres()} <br>`); //getter
persona.establecerApellidos("Perez"); //setter
document.write(`Apellidos: ${persona.obtenerApellidos()} <br>`); //getter
document.write(`N° Identidad: ${persona.obtenerIdentidad()} <br>`); //getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento} <br>`); //público
document.write(`Sexo: ${persona.sexo} <br>`); //público
