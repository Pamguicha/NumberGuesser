let target;

// Second I have to click the make a guess button with my number option
const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round');

// The computer shows the target number choosen so I need to create a function with that.
guessButton.addEventListener('click', () => {
     // Generate the target value
target = generateTarget();
// Retrieve the player's guess
const currentHumanGuess = humanGuessInput.value;
 // Make a random 'computer guess'
const computerGuess = Math.floor(Math.random() * 9);

// Display the computer guess and the target
computerGuessDisplay.innerText = computerGuess;
targetNumberDisplay.innerText = target;

// Determine if the human or computer wins:
const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
const winner = humanIsWinner ? 'human' : 'computer'
// Update the correct score:
updateScore(winner);

// Display the winner
if (humanIsWinner) {
    guessButton.innerText = 'You win! 💃';
    guessButton.classList.toggle('winning-text')
} else {
    computerWinsDisplay.innerText = 'Computer wins 🖥️';
}

// Display the current scores:
humanScoreDisplay.innerText = humanScore;
computerScoreDisplay.innerText = computerScore;

// Set the correct disabled state for the buttons
guessButton.setAttribute('disabled', true)
nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
    // Increase the round number
    advanceRound();
      // Display the new round number
    roundNumberDisplay.innerText = currentRoundNumber;
  
  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display:
targetNumberDisplay.innerText = '?';
guessButton.innerText = 'Make a Guess';
humanGuessInput.value = '';
computerGuessDisplay.innerText = '';
computerWinsDisplay.innerText = '';
guessButton.classList.remove('winning-text');

});

//First I have to click - + button tu choose my number so I have to disable the number button to do that.
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value + 1;
    handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value -1;
    handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
    if(value > 0 && value <= 9) {
        subtractButton.removeAttribute('disabled');
        addButton.removeAttribute('disabled');
    } else if (value > 9) {
        addButton.setAttribute('disabled', true);
    } else if (value <= 0) {
        subtractButton.setAttribute('disabled', true);
    }
}

humanGuessInput.addEventListener('input', function(e) {
handleValueChange(e.target.value);
});




// Third.2 simultaneosly will show in the ? of the computer option, the pc number.

// Four, I click next round to continue playing(this time will be set to click)

// Four.2 When I click next round  the round number change to the number of the run




//const nextButton = () =>{
            //let city = prompt("What city do you live in?");
          
//}
  //let nextRoundButton = document.querySelector("#next-round");
    //  nextRoundButton.addEventListener("click", nextButton);