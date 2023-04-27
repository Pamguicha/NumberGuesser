let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (Math.abs(humanGuess === computerGuess)) {
    return true;
  } else if (Math.abs(humanGuess > computerGuess)) {
    return true;
  } else if (Math.abs(humanGuess < computerGuess)) {
    return false;
  } else if (Math.abs(humanGuess === targetGuess)) {
    return true;
  } else {
    return "Something is wrong";
  }
};

const updateScore = (winner) => {
if (winner === 'human' ) {
humanScore++;
} else if (winner === 'computer'){
computerScore++;
  }
};


const advanceRound = () => currentRoundNumber++;


// Write 4 functions