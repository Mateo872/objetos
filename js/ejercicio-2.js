// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const account = {
  owner: "Alex",
  balance: 0,

  depositMoney: function (quantity) {
    this.balance += quantity;
    console.log(`Se han ingresado $${quantity} en la cuenta.`);
  },

  exportMoney: function (quantity) {
    if (quantity <= this.balance) {
      this.balance -= quantity;
      console.log(`Se han extraído $${quantity} de la cuenta.`);
    } else {
      console.log(
        "No hay suficiente saldo en la cuenta para realizar esta operación."
      );
    }
  },

  report: function () {
    console.log(`Titular: ${this.owner} 
Saldo: $${this.balance}`);
  },
};

account.depositMoney(200); // Ingreso $200 a la cuenta.
account.report(); // Veo cuánto dinero tengo.
account.exportMoney(50); // Retiro $50.
account.report(); // Veo cuánto dinero tengo.
account.exportMoney(300); // Pruebo sacando más dinero del que tengo.
