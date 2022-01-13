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

const playerSelection = function () {
    let playerChoice = window.prompt("Make your selection! ").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        console.log("Sorry, I did not recognize that choice. Let's try again.");
        return playerSelection();
    }
};

// player a round and declare winner

const round = function (computer, player) {
    computerWeapon = computer();
    playerWeapon = player();
    if (computerWeapon == playerWeapon) {
        console.log(`You chose ${playerWeapon} and the computer chose ${computerWeapon}! It's a tie!`);
        return([0,0]);
    } else if ((computerWeapon === "rock" && playerWeapon === "scissors") || (computerWeapon === "scissors" && playerWeapon === "paper") || (computerWeapon === "paper" && playerWeapon === "rock")) {
        console.log(`You chose ${playerWeapon} and the computer chose ${computerWeapon}! You lose!`)
        return([0,1]);
    } else {
        console.log(`You chose ${playerWeapon} and the computer chose ${computerWeapon}! You win!`)
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

game(5,computerPlay,playerSelection)