//get computer selection

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

// player a round and declare winner

const round = function (computer, player) {
    // set variables
    const computerWeapon = computer();
    const playerWeapon = player.toLowerCase();
    const computerDisplay = document.querySelector('.computerChoice');
    const playerDisplay = document.querySelector('.playerChoice');
    const result = document.querySelector('.result')

    // display selections
    computerDisplay.textContent = computerWeapon;
    playerDisplay.textContent = playerWeapon;

    // analyze and display results
    if (computerWeapon == playerWeapon) {
        result.textContent = "It's a tie!"
        return([0,0]);
    } else if ((computerWeapon === "rock" && playerWeapon === "scissors") || (computerWeapon === "scissors" && playerWeapon === "paper") || (computerWeapon === "paper" && playerWeapon === "rock")) {
        result.textContent = "You lose!"
        return([0,1]);
    } else {
        result.textContent = "You win!"
        return([1,0]);
    }
};


// alert player that game is starting, play five rounds, ask if want to play again

const game = function (roundNumber, computerFunc, playerFunc) {
    let score = {};
    score = {
        player: 0, 
        computer: 0
    };
    console.log(score.player);

    const display_score = function (score1, score2) {
        console.log(`The current score is: player ${score1}, computer ${score2}.`)
    }
    console.log("Let's play a few rounds of rock paper scissors!");

    for(let i = roundNumber; i > 0; i--) {
        display_score(score.player, score.computer);
        result = round(computerFunc, playerFunc);
        score.player += result[0];
        score.computer += result[1];
    }

    console.log(`After ${roundNumber} rounds of rock, paper, scissors, the final score is: player ${score.player}, computer ${score.computer}.`);
    if (score.player > score.computer) {
        console.log("You win!!!");
    } else if (score.computer > score.player) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
};

/* game(5,computerPlay,playerSelection) */

// Play round with button selection

// set variables
const weaponButtons = document.querySelectorAll(`.weapon`);
console.log(weaponButtons);


// add event listener to buttons
weaponButtons.forEach(button => button.addEventListener('click', () => round(computerPlay, button.textContent)));