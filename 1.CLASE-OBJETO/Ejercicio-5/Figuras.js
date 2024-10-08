// Defino la clase
class FigurasGeometricas {
    // Método constructor
    constructor(lados, color, area, perimetro, nombre) {
      this.lados = lados //Propiedades para la instancia
      this.color = color
      this.area = area
      this.perimetro = perimetro
      this.nombre = nombre
    }
  
    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Info. de la figura geométrica<h3><br>")
        document.write("Lados: " + this.lados + "<br>")
        document.write("Color: " + this.color + "<br>")
        document.write("Área: " + this.area + "<br>")
        document.write("Perímetro: " + this.perimetro + "<br>")
        document.write("Nombre: " + this.nombre + "<br>")
        document.write("<hr>")
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase FigurasGeometricas
  const objeto1 = new FigurasGeometricas("4 lados", "Amarillo", "25 cm²", "20 cm", "cuadrado");
  const objeto2 = new FigurasGeometricas("3 lados", "Verde", "10 cm²", "12 cm", "Triángulo");
  const objeto3 = new FigurasGeometricas("0 lados", "Azul", "78.54 cm²", "31.42 cm", "Círculo");
  
  // Mostrar los detalles de cada objeto
  objeto1.mostrarDetalles();
  objeto2.mostrarDetalles();
  objeto3.mostrarDetalles();