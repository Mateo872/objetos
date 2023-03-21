// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  sayHello() {
    console.log(
      `Hola, soy ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
    );
  }

  sayGoodbye() {
    console.log(`Chau!`);
  }
}

const person1 = new Person("Mateo", 20, "Desarrollador web");
const person2 = new Person("Valeria", 52, "Ingeniera");

person1.sayHello();
person1.sayGoodbye();
person2.sayHello();
person2.sayGoodbye();
