// crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.

const userName = prompt("Introduzca su nombre");

const computerNames = ["robot1", "robot2", "robot3"];
const computerName =
  computerNames[Math.floor(Math.random() * computerNames.length)];

function generateComputerMove() {
  return Math.floor(Math.random() * 3);
}

function determineWinner(userMove, computerMove) {
  if (userMove === computerMove) {
    return "¡Empate!";
  } else if (
    (userMove === 0 && computerMove === 2) ||
    (userMove === 1 && computerMove === 0) ||
    (userMove === 2 && computerMove === 1)
  ) {
    return `${userName}`;
  } else {
    return `${computerName}`;
  }
}

function askToPlayAgain() {
  const answer = prompt("¿Querés volver a jugar? (s/n)").toLowerCase();
  return answer === "s";
}

let playAgain = true;

while (playAgain) {
  const userMoveText = prompt(
    `${userName}, elige entre 'piedra, papel o tijera'`
  ).toLowerCase();

  let userMove;

  switch (userMoveText) {
    case "piedra":
      userMove = 0;
      break;
    case "papel":
      userMove = 1;
      break;
    case "tijera":
      userMove = 2;
      break;
    default:
      alert("Jugada inválida, intenta de nuevo");
      continue;
  }

  const computerMove = generateComputerMove();

  const winner = determineWinner(userMove, computerMove);

  switch (winner) {
    case "¡Empate!":
      alert(`¡Empate!. Ambos eligieron ${userMoveText}.`);
      break;
    case `${userName}`:
      alert(
        `Ganaste, ${userName}! ${userMoveText} gana ${
          ["piedra", "papel", "tijera"][computerMove]
        }.`
      );
      break;
    case `${computerName}`:
      alert(
        `Ganaste, ${computerName}! ${
          ["piedra", "papel", "tijera"][computerMove]
        } gana ${userMoveText}.`
      );
      break;
  }

  playAgain = askToPlayAgain();
}

alert("Gracias por jugar!");
