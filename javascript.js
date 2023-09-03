function getComputerChoice() {
    // output random number from 0 to 2
    let num = Math.floor((Math.random()*10)%3);

    // assign rock, paper or scissors based on random number
    switch(num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getPlayerChoice() {
    // prompt "Rock, paper, or scissors?"
    // input to lowercase, save to variable
    let input = prompt("Rock, paper or scissors?").toLowerCase();

    // check if "rock", "paper" or "scissors" have been inputted, if not then run again
    if (!(input == "rock" || input == "paper" || input == "scissors")) {
        console.log("I'm sorry, I don't understand. Please type 'rock', 'paper', or 'scissors'");
        return getPlayerChoice();
    } else {
        return input;
    }
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        console.log("Draw. Choose again.");
        return playRound();
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, computer wins.");
        return "computerWin";
    } else if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You win, computer loses.");
        return "playerWin"
        } else {
        console.log("Something has gone wrong.");
    }
}

function game() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;

    for (i=0; i<5; i++) {
        result = playRound();
        switch (result) {
            case "playerWin":
                playerWinCounter += 1;
                break;
            case "computerWin":
                computerWinCounter += 1;
                break;
        }
    }
    
    if (playerWinCounter > computerWinCounter) {
        console.log("You're the champion!");
    } else if ( computerWinCounter > playerWinCounter) {
        console.log("Sorry, the computer has defeated you.")
    }
}