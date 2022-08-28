const yourText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const button = document.querySelectorAll(".button");
let player;
let computer;
let finalResult;

button.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    yourText.textContent = `you: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `result:${check()}`;
  })
);
function computerTurn() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
}
function check() {
  if (computer == player) {
    return "Draw!";
  } else if (computer == "rock") {
    return player == "paper" ? "you win!" : "you lose!";
  } else if (computer == "paper") {
    return player == "scissors" ? "you win!" : "you lose!";
  } else if (computer == "scissors") {
    return player == "rock" ? "you win!" : "you lose!";
  }
}
