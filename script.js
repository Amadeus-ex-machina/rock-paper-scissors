let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

const roundReport = document.createElement('roundReport');
const scoreReport = document.createElement('scoreReport');
const winnerReport = document.createElement('winnerReport');

/**
 * Generates computer choice for rock-paper-scissors.
 * @returns {string} Computer choice of rock, paper, or scissors.
 */
function getComputerChoice() {
    // Returns a random integer from 0 to 2.
    const randInt = Math.floor(Math.random() * 3);

    let choice = 'rock';

    switch (randInt) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
        default:
            choice = 'rock';
    }
    return choice;
}

/**
 * Plays a round of rock-paper-scissors.
 * Player's choice is case-insensitive.
 * @param {string} playerSelection Player's choice.
 * @param {string} computerSelection Computer's choice.
 * @return {string} 0 if player win, 1 if computer win, 2 if tie.
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    console.log('Player chooses ' + playerSelection + '!');
    console.log('Computer chooses ' + computerSelection + '!');

    let result;
    if ((playerSelection == 'rock' && computerSelection == 'scissors')
        || (playerSelection == 'paper' && computerSelection == 'rock')
        || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 0; // Player win
    } else if (playerSelection == computerSelection) {
        result = 2; // Tie
    } else {
        result = 1; // Computer win
    }
    return result;
}

sayScore = (playerScore, computerScore) => {
    scoreReport.classList.add('displayText');
    scoreReport.textContent = 'Player score: ' + playerScore + ' ' + 'Computer score: ' + computerScore;
    display.appendChild(scoreReport);
}

sayRound = (playerSelection, computerSelection, roundResult) => {
    roundReport.classList.add('displayText');
    if (roundResult == 0) {
        roundReport.textContent = 'Player wins the round!';
    } else if (roundResult == 2) {
        roundReport.textContent = 'Tie!';
    } else {
        roundReport.textContent = 'Computer wins the round!';
    }
    display.appendChild(roundReport);
}

sayWinner = () => {
    if (playerScore > computerScore) {
        winnerReport.classList.add('friendlyText');
        winnerReport.textContent = 'Player wins the game!';
    } else {
        winnerReport.classList.add('evilText');
        winnerReport.textContent = 'Computer wins the game!';
    }
    display.appendChild(winnerReport);
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        // Clear display of all children.
        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }

        let playerSelection = button.id;
        let computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 0) {
            playerScore++;
        } else if (roundResult == 1) {
            computerScore++;
        } else {
            // Do nothing.
        }

        sayRound(playerSelection, computerSelection, roundResult);
        sayScore(playerScore, computerScore);

        if (playerScore == 5 || computerScore == 5) {
            sayWinner();
            // Reset the scores.
            playerScore = 0;
            computerScore = 0;
        }
    });
});