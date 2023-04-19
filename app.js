let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (user, computer, secretTarget) => {
  if (Math.abs(user === computer)) {
    return true;
  } else if (Math.abs(user > computer)) {
    return true;
  } else if (Math.abs(user < computer)) {
    return false;
  } else if (Math.abs(user === secretTarget)) {
    return true;
  } else {
    return "Something is wrong";
  }
};

const updateScore = (winner) => {
if (winner === user ) {
let updateScore = humanScore + 1;
} else if 
  (winner === computer ){
let updateScore = computerScore + 1;
  }
};


const advanceRound = () => {
let updateNumber = currentRoundNumber + 1
};
advanceRound();

// Write 4 functions