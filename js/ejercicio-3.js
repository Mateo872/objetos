// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

class rectangle {
  height = 0;
  width = 0;

  setHigh(newHeight) {
    this.height = newHeight;
  }

  setWidth(newWidth) {
    this.width = newWidth;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  calculatePerimeter() {
    return 2 * (this.height + this.width);
  }

  calculateArea() {
    return this.height * this.width;
  }
}

const myRectangle = new rectangle();

// Establecer sus propiedades
myRectangle.setHigh(5);
myRectangle.setWidth(10);

// Mostrar sus propiedades
console.log("Alto:", myRectangle.getHeight());
console.log("Ancho:", myRectangle.getWidth());

// Calcular su perímetro y su área
console.log("Perímetro:", myRectangle.calculatePerimeter());
console.log("Área:", myRectangle.calculateArea());
