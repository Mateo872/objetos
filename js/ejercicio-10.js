// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.

// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Airport {
  constructor(nameAirport) {
    this.nameAirport = nameAirport;
    this.listAirplanes = [];
  }

  addAirplane(airplane) {
    this.listAirplanes.push(airplane);
  }

  searchAirplane(nameAirplane) {
    for (let i = 0; i < this.listAirplanes.length; i++) {
      if (this.listAirplanes[i].name === nameAirplane) {
        return this.listAirplanes[i];
      }
    }
    return "No se encontró el avión.";
  }
}

class Airplane {
  constructor(name, capacity, destination) {
    this.name = name;
    this.capacity = capacity;
    this.destination = destination;
    this.listPassengers = [];
  }

  approach(passenger) {
    if (this.listPassengers.length < this.capacity) {
      this.listPassengers.push(passenger);
      console.log(`${passenger} abordó el avión ${this.name}.`);
    } else {
      console.log(`El avión ${this.name} está lleno.`);
    }
  }
}

const airport = new Airport("Aeropuerto Ezeiza");

const airplane1 = new Airplane("Avión 1", 100, "Ciudad de México");
const airplane2 = new Airplane("Avión 2", 150, "Madrid");
const airplane3 = new Airplane("Avión 3", 80, "Buenos Aires");

airport.addAirplane(airplane1);
airport.addAirplane(airplane2);
airport.addAirplane(airplane3);

const planeFound = airport.searchAirplane("Avión 3");

if (typeof planeFound === "string") {
  console.log(planeFound);
} else {
  planeFound.approach("Mateo Bellini");
}
