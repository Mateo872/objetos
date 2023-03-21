// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrargeneration: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

class Person {
  constructor(name, age, dni, gender, weight, height, yearBirth) {
    this.name = name;
    this.age = age;
    this.dni = dni;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.yearBirth = yearBirth;
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

const person1 = new Person("Mateo", 20, "44021006", "H", 75, 1.8, 2002);

person1.showGeneration();

const person2 = new Person("Valeria", 39, "22464102", "M", 60, 1.65, 1990);

person2.showGeneration();
