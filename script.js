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

    console.log('Computer chooses ' + choice + '!');
    return choice;
}

/**
 * Plays a round of rock-paper-scissors.
 * Player's choice is case-insensitive.
 * @param {string} playerSelection Player's choice.
 * @param {string} computerSelection Computer's choice.
 * @return {string} 0 if player win, 1 if computer win.
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let result;
    if ((playerSelection == 'rock' && computerSelection == 'scissors')
        || (playerSelection == 'paper' && computerSelection == 'rock')
        || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 0;
    } else {
        result = 1;
    }
    return result;
}

/**
 * Plays a 5 round game of rock-paper-scissors.
 * Keeps score and reports winner and loser at end.
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numRounds = 0;

    while (numRounds < 5) {
        let playerSelection = prompt('Input rock, paper, or scissors.');

        // Check if playerSelection is valid.
        while (!(playerSelection == 'rock'
            || playerSelection == 'paper'
            || playerSelection == 'scissors')) {
            console.log('input was ' + playerSelection);
            console.log('Invalid input. You must input rock, paper, or scissors!');
            playerSelection = prompt('Input rock, paper, or scissors.');
        }

        console.log('Player chooses ' + playerSelection + '!');

        let computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection) == 0) {
            playerScore++;
            console.log('Player wins the round!');
        } else {
            computerScore++;
            console.log('Computer wins the round!');
        }
        numRounds++;
    }

    console.log('Player score: ' + playerScore);
    console.log('Computer score:' + computerScore);

    if (playerScore > computerScore) {
        console.log('Player wins the game!');
    }

    if (playerScore < computerScore) {
        console.log('Computer wins the game!');
    }

}

game()