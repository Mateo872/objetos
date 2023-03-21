// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  color: "rojo",
  brand: "Toyota",
  model: "Corolla",
  ignition: false,

  turnOn: function () {
    if (!this.ignition) {
      this.ignition = true;
      console.log("El auto está encendido");
    } else {
      console.log("El auto ya está encendido");
    }
  },

  turnOff: function () {
    if (this.ignition) {
      this.ignition = false;
      console.log("El auto está apagado");
    } else {
      console.log("El auto ya está apagado");
    }
  },
};

auto.turnOn(); // Auto encendido
auto.turnOff(); // Auto apagado
