// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  emitSound() {
    console.log("Un animal emitió un sonido");
  }
}

class Dog extends Animal {
  emitSound() {
    console.log("Guau! Soy una perra llamada " + this.name);
  }
}

class Cat extends Animal {
  emitSound() {
    console.log("Miau! Soy un gato llamado " + this.name);
  }
}

const myDog = new Dog("Luna");

myDog.emitSound();

const myCat = new Cat("Mateo");

myCat.emitSound();
