
const playerText = document.querySelector("#playerText");
const computeText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const Choice = document.querySelectorAll(".Choice")
let player;
let Computer;
let Result;


Choice.forEach(button => button.addEventListener("click", () => {
  playerText = button.textContent;
  computerTurn();
  playerText.textContent = `you :  $(player)`
  computeText.textContent = `you :  $(Computer)`
  resultText.textContent = mainResult();
}));



function computerTurn() {

  const ranNumber = math.floor(math.random() * 3) + 1;

  switch (ranNumber) {
    case 1:
      Computer = "rock"
      break;
    case 2:
      Computer = "paper"
      break;
    case 3:
      Computer = "scissors"
      break;
  }
}


