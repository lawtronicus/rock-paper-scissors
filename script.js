/* wrapper function for entire game */
function game() {

    //check winner
    

    //add event listeners
    addButtonListeners = function () {
        const rock = document.querySelector('.rock-container');
        const paper = document.querySelector('.paper-container')
        const scissors = document.querySelector('.scissors-container');
    
        rock.addEventListener('click', round);
        paper.addEventListener('click', round);
        scissors.addEventListener('click', round);
    };

    removeButtonListeners = function () {
        const rock = document.querySelector('.rock-container');
        const paper = document.querySelector('.paper-container')
        const scissors = document.querySelector('.scissors-container');
    
        rock.removeEventListener('click', round);
        paper.removeEventListener('click', round);
        scissors.removeEventListener('click', round);
    }

    // update score while playing
    const updateScore = function (score1, score2) {
        let playerScore = document.querySelector('.playerScore');
        let computerScore = document.querySelector('.computerScore');
        playerScore.textContent = parseInt(playerScore.textContent) + score1;
        computerScore.textContent = parseInt(computerScore.textContent) + score2;
    };

    // play a round of rock paper scissors
    const round = function () {

        // computer selects weapon
        const computerPlay = function() {
            // get random number between 1 and 3
            let rps_num = Math.floor(Math.random() * 3) + 1;
            switch (rps_num) {
                case 1:
                    return("rock");
                    break;
                case 2:
                    return("scissors");
                    break;
                default:
                    return("paper")
            }
        };

        // display selections
        const displaySelections = function (playerChoice, computerChoice) {
            const computerDisplay = document.querySelector('.computerChoice');
            const playerDisplay = document.querySelector('.playerChoice');
            rock = "/images/rock.svg";
            paper = "/images/toilet-paper.svg";
            scissors = "/images/scissors.svg";

            switch (playerChoice) {
                case 'rock':
                    playerDisplay.src = rock;
                    break;
                case 'paper': 
                    playerDisplay.src = paper;
                    break;
                default:
                    playerDisplay.src = scissors;
            }

            switch (computerChoice) {
                case 'rock':
                    computerDisplay.src = rock;
                    break;
                case 'paper': 
                    computerDisplay.src = paper;
                    break;
                default:
                    computerDisplay.src = scissors;
            }
        }

        // display winner
        const displayWinner = function () {
            const playerScore = document.querySelector('.playerScore').textContent;
            const computerScore = document.querySelector('.computerScore').textContent;
            const roundResult = document.querySelector('.result');
            const you = document.querySelector('.you');
            const win = document.querySelector('.win');
            const lose = document.querySelector('.lose');
            //remove "fight"

            const fight = document.querySelector('.fight');
            fight.style.display = "none";
            roundResult.textContent = "";

            if (parseInt(playerScore) > parseInt(computerScore)) {
                you.style.display = "contents";
                win.style.display = "contents";

            } else {
                you.style.display = "contents";
                lose.style.display = "contents";
            }
        };

        // reset game if play again button is clicked
        const resetGame = function () {
            const playerScore = document.querySelector('.playerScore');
            const computerScore = document.querySelector('.computerScore');
            const playerChoice = document.querySelector('.playerChoice');
            const computerChoice = document.querySelector('.computerChoice');
            const result = document.querySelector('.result');
            const fight = document.querySelector('.fight');
            const you = document.querySelector('.you');
            const win = document.querySelector('.win');
            const lose = document.querySelector('.lose');
            const playerWeaponImg = document.querySelector('.playerChoice');
            const computerWeaponImg = document.querySelector('.computerChoice')
            const playAgain = document.querySelector('.play-again');
            const chooseYourWeapon = document.querySelector('.footer-text');

            // bring back 'fight'
            you.style.display = 'none';
            win.style.display = 'none';
            lose.style.display = 'none';
            fight.style.display = 'contents';
            
            // remove play again
            playAgain.style.display = 'none';

            // bring back choose your weapon
            chooseYourWeapon.style.display = "flex";

            playerWeaponImg.src = "/images/question-mark.svg"
            computerWeaponImg.src = "/images/question-mark.svg"
            playerScore.textContent = '0';
            computerScore.textContent = '0';
            playerChoice.textContent = '';
            computerChoice.textContent = '';
            result.textContent = '';

            addButtonListeners();


        };
    
        // offer to play again once final score is reached
        const playAgain = function () {
            let playAgainBtn = document.querySelector('.play-again');
            let chooseYourWeapon = document.querySelector('.footer-text');

            chooseYourWeapon.style.display = 'none';
            playAgainBtn.style.display = "flex";
            removeButtonListeners();
            playAgainBtn.addEventListener('click', resetGame);
        };

        // check for overall winner
        const checkWinner = function () {
            let playerScore = document.querySelector('.playerScore');
            let computerScore = document.querySelector('.computerScore');
            if (playerScore.textContent >= '5' || computerScore.textContent >= '5') {
                displayWinner();
                playAgain();
            }
        };

        // set variables
        const computerWeapon = computerPlay();
        const playerWeapon = this.classList[1];
        const result = document.querySelector('.result')

        displaySelections(playerWeapon, computerWeapon);
        
        // analyze and display results
        if (computerWeapon == playerWeapon) {
            result.textContent = "It's a tie!"
            updateScore(0,0);
            checkWinner();
            return([0,0]);
        } else if ((computerWeapon === "rock" && playerWeapon === "scissors") || (computerWeapon === "scissors" && playerWeapon === "paper") || (computerWeapon === "paper" && playerWeapon === "rock")) {
            result.textContent = "You lose!"
            updateScore(0,1);
            checkWinner();
            return([0,1]);
        } else {
            result.textContent = "You win!"
            updateScore(1,0);
            checkWinner();
            return([1,0]);
        }
    };

    addButtonListeners();
}

// get player selection

/*
const playerSelection = function () {
    let playerChoice = window.prompt("Make your selection! ").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        console.log("Sorry, I did not recognize that choice. Let's try again.");
        return playerSelection();
    }
};
*/

/* the function below is no longer in use
const playerSelection = function () {
    let playerChoice = window.prompt("Make your selection! ").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        console.log("Sorry, I did not recognize that choice. Let's try again.");
        return playerSelection();
    }
};
*/

game();