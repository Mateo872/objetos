// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Product {
  constructor(code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }

  printData() {
    console.log(
      `Código: ${this.code}, Nombre: ${this.name}, Precio: ${this.price}`
    );
  }
}

function generateCode() {
  const characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";

  let code = "";

  for (let i = 0; i < 3; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

const product1 = new Product(generateCode(), "Pelota", "$100");
const product2 = new Product(generateCode(), "Camiseta de River", "$200");
const product3 = new Product(generateCode(), "Medias", "$300");

const products = [product1, product2, product3];

for (let i = 0; i < products.length; i++) {
  products[i].printData();
}
