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

/* The playTo function will allow you to play
 * `Rock, Paper, Scissors` until either the 
 * player or Computer has won x times.
 */

function playTo(x) {

    // If no parameter is given, x will defualt to 5.
    x = x || 5;
    
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    // playerWins and computerWins is less than x.
    while (playerWins < x && computerWins < x) {

        // p equals the result of the getPlayerMove function.
        var p = getPlayerMove();

        // c equals the result of the getComputerMove function.
        var c = getComputerMove();

        // winner is the result of the getWinner function.
        // p and c are the parameters of getWinner. 
        var winner = getWinner(p, c);
        
        // If the computer outputs the same result = draw.
        if (winner === 'tie') {
            console.log('It was a draw.');
        } else if (winner === 'player') {
            // 1 plus counter added to playerWins (score).
            playerWins++;
        } else {
            // 1 plus counter added to computerWins (score).
            computerWins++;
        }

        // The scoreboard.
        console.log('You chose ' + p + ' & the Computer chose ' + c + '.');
        console.log('Current score: ' + playerWins + ' : ' + computerWins + '\n');

    }

    // Used the ternary operator to log the ultimate winner. Best of (x).
    var playerWonString = 'You beat the computer. Clever human. Here.. have a cookie. ಠ_ಠ';
    var computerWonString = 'The computer beat you.. Machines will take over. No human is safe!';
    playerWins === x ? console.log(playerWonString) : console.log(computerWonString);

}

// Function invocation. Code will now execute.
playTo();

