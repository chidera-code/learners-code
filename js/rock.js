
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultParagraph = document.getElementById('result');
const scoreParagraph = document.getElementById('score');

const options = ['rock', 'paper', 'scissors'];
const winningCombos = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};


rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
  const computerChoice = getRandomOption();
  const result = determineWinner(userChoice, computerChoice);
  resultParagraph.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;

  scoreParagraph.textContent = `You: ${userScore} - Computer: ${computerScore}`;
}

function getRandomOption() {
  return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (winningCombos[userChoice] === computerChoice) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}


