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

const rockbutton = document.getElementById('rock');
const paperbutton = document.getElementById('paper');
const scissorsbutton = document.getElementById('scissors');

const resultdiv = document.getElementById('result');
const playerWinsP = document.getElementById('playerWins');
const computerWinsP = document.getElementById('computerWins');
const championP = document.getElementById('champion');

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection) {
    championP.textContent = "";
    computerSelection = getComputerChoice();
    if (playerWins < 5 && computerWins < 5) {
        if (playerSelection == computerSelection) {
            playRound(playerSelection);
        } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
            resultdiv.textContent = "You lose, computer wins.";
            computerWinsP.textContent = `Computer score: ${++computerWins}`;
        } else if (computerSelection == "rock" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "rock") {
            resultdiv.textContent = "You win, computer loses.";
            playerWinsP.textContent = `Player score: ${++playerWins}`;
        }
    }
    if (playerWins == 5) {
        championP.textContent = "You're the champion!";
        playerWins = 0;
        computerWins = 0;
        computerWinsP.textContent = `Computer score: ${computerWins}`
        playerWinsP.textContent = `Player score: ${playerWins}`;
    }
    if (computerWins == 5) {
        championP.textContent = "The computer reigns supreme.";
        playerWins = 0;
        computerWins = 0;
        computerWinsP.textContent = `Computer score: ${computerWins}`
        playerWinsP.textContent = `Player score: ${playerWins}`;
    }
}

rockbutton.addEventListener('click', () => playRound("rock"));
paperbutton.addEventListener('click', () => playRound("paper"));
scissorsbutton.addEventListener('click', () => playRound("scissors"));