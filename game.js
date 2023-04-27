let target;

// Second I have to click the make a guess button with my number option
const humanGuessInput = document.getElementById('human-guess');
const guessButton = document.getElementById('guess');
const computerGuessDisplay = document.getElementById('computer-guess');
// Third if I win, the text of make a guess button will change with you win!
// If I lose I text under the computer section will say Computer win
// The computer shows the target number choosen so I need to create a function with that.
guessButton.addEventListener('click', () => {
target = generateTarget();
const currentHumanGuess = humanGuessInput.value;
const computerGuess = Math.floor(Math.random() * 9);
computerGuessDisplay.innerText = computerGuess;
}

);


//First I have to click - + button tu choose my number so I have to disable the number button to do that.
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value + 1;
    handleValueChange(humanGuessInput.value);
}
);

subtractButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value -1;
    handleValueChange(humanGuessInput.value);
}

);

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
}
);




// Third.2 simultaneosly will show in the ? of the computer option, the pc number.

// Four, I click next round to continue playing(this time will be set to click)

// Four.2 When I click next round  the round number change to the number of the run




//const nextButton = () =>{
            //let city = prompt("What city do you live in?");
          
//}
  //let nextRoundButton = document.querySelector("#next-round");
    //  nextRoundButton.addEventListener("click", nextButton);