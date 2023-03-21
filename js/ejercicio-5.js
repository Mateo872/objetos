// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrargeneration: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Person {
  constructor(name, age, gender, weight, height, yearBirth) {
    this.name = name;
    this.age = age;
    this.dni = this.generateDni();
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.yearBirth = yearBirth;
  }

  olderAge() {
    if (this.age >= 18) {
      return `${this.name} es mayor de edad.`;
    } else {
      return `${this.name} no es mayor de edad.`;
    }
  }

  showData() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Edad: ${this.age}`);
    console.log(`Dni: ${this.dni}`);
    console.log(`Sexo: ${this.gender}`);
    console.log(`Peso: ${this.weight}`);
    console.log(`Altura: ${this.height}`);
    console.log(`Año de Nacimiento: ${this.yearBirth}`);
  }

  generateDni() {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
  }

  showGeneration() {
    let generation = "";

    if (this.yearBirth >= 1994 && this.yearBirth <= 2010) {
      generation = "Generación Z";
      console.log(
        `La persona pertenece a la '${generation}' y su rasgo característico es la irreverencia.`
      );
    } else if (this.yearBirth >= 1981 && this.yearBirth <= 1993) {
      generation = "Generación Y";
      console.log(
        `La persona pertenece a la '${generation}' y su rasgo característico es la frustración.`
      );
    } else if (this.yearBirth >= 1969 && this.yearBirth <= 1980) {
      generation = "Generación X";
      console.log(
        `La persona pertenece a la '${generation}' y su rasgo característico es la obsesión por el éxito.`
      );
    } else if (this.yearBirth >= 1949 && this.yearBirth <= 1968) {
      generation = "Baby Boom";
      console.log(
        `La persona pertenece a la '${generation}' y su rasgo característico es la ambición.`
      );
    } else if (this.yearBirth >= 1930 && this.yearBirth <= 1948) {
      generation = "Silent Generation";
      console.log(
        `La persona pertenece a la '${generation}' y su rasgo característico es la autoridad.`
      );
    } else {
      console.log("No se puede determinar la generación de la persona.");
    }
  }
}

// Ejemplo

const person1 = new Person("Mateo", 20, "H", "75kg", "1.8mts", 2002);

person1.showGeneration();
person1.olderAge();
person1.showData();
person1.generateDni();
