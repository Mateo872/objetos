// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// addContact(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class Agenda {
  constructor(size = 10) {
    this.size = size;
    this.contacts = [];
  }

  addContact(contact) {
    if (this.contacts.length < this.size) {
      this.contacts.push(contact);
      console.log(`El contacto ${contact.name} ha sido añadido a la agenda.`);
    } else {
      console.log(`La agenda está llena, no se puede añadir más contactos.`);
    }
  }

  existContact(contact) {
    return this.contacts.some((c) => c.name === contact.name);
  }

  listContact() {
    console.log(`Lista de contactos:`);
    this.contacts.forEach((c) => console.log(`${c.name}: ${c.phone}`));
  }

  searchContact(name) {
    const contact = this.contacts.find((c) => c.name === name);

    if (contact) {
      console.log(`El teléfono de ${contact.name} es ${contact.phone}.`);
    } else {
      console.log(`No se encontró el contacto ${name} en la agenda.`);
    }
  }

  deleteContact(contact) {
    const index = this.contacts.findIndex((c) => c.name === contact.name);

    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(
        `El contacto ${contact.name} ha sido eliminado de la agenda.`
      );
    } else {
      console.log(`No se encontró el contacto ${contact.name} en la agenda.`);
    }
  }

  agendaFull() {
    return this.contacts.length >= this.size;
  }

  holesFree() {
    return this.size - this.contacts.length;
  }
}

// Ejemplo de uso:
const agenda = new Agenda();

const contact1 = new Contact("Juan", "123456789");
const contact2 = new Contact("María", "987654321");
const contact3 = new Contact("Juan", "555555555");
const contact4 = new Contact("Pedro", "111111111");

agenda.addContact(contact1);
agenda.addContact(contact2);
agenda.addContact(contact3);
agenda.addContact(contact4);

console.log(`¿Existe el contacto Juan? ${agenda.existContact(contact1)}`);
console.log(
  `¿Existe el contacto Pepe? ${agenda.existContact(
    new Contact("Pepe", "444444444")
  )}`
);

agenda.listContact();

agenda.searchContact("María");
agenda.searchContact("Pepe");

agenda.deleteContact(contact2);
agenda.deleteContact(new Contact("Ana", "555555555"));

console.log(`La agenda está llena: ${agenda.agendaFull()}`);
console.log(`Huecos libres: ${agenda.holesFree()}`);
