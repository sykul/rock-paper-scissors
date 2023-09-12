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

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return playRound(playerSelection);
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

const rockbutton = document.getElementById('rock');
const paperbutton = document.getElementById('paper');
const scissorsbutton = document.getElementById('scissors');

rockbutton.addEventListener('click', () => playRound("rock"));
paperbutton.addEventListener('click', () => playRound("paper"));
scissorsbutton.addEventListener('click', () => playRound("scissors"));