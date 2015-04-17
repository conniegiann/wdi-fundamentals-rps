////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    /* If user imputs a move, the expression will evaluate to that value.
     * If move is unspecified: prompt will pop up & player will need to input a move.
     */  
    if (move) {  
        return move;
    } else {
        return getInput();
    }
};

function getComputerMove(move) {

    /* If computer imputs a move the expression will evaluate to that value.
     * If move is unspecified: computer will return random move.
     */    
    if (move) {
        return move;
    } else {
        return randomPlay();
    }
};

function getWinner(playerMove, computerMove) {

    // Somewhere to store the winner.
    var winner;
   
    /* If player and computer make the same choice.
     * Result: `tie`. 
     */
    if (playerMove === computerMove) {
        return 'tie';
    }

    /* 
     * If the player chooses `rock` & computer chooses `scissors`.
     * Result: player = winner, else computer = winner.
    */
    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            return 'player';
        } else {
            return 'computer';
        }
    } 

    /* 
     * If the player chooses `scissors` & computer chooses `paper`.
     * Result: player = winner, else computer = winner.
    */
    if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
            return 'player';
        } else {
            return 'computer';
        }
    }

    /* 
     * If the player chooses `paper` & computer chooses `rock`.
     * Result: player = winner, else computer = winner.
    */
    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

