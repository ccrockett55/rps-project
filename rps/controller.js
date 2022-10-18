var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame();

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.    
    // Use game.IsNumerOfRoundsValid() to validate the user input. 

    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
    let numberOfRounds;
    
     do {  
        numberOfRounds = prompt("How many rounds would you like to play"); 
        if(game.isNumberOfRoundsValid(numberOfRounds) == true ) {
                game.setNumberOfRounds = numberOfRounds;
            } else {
                alert("Please try again with a number between 0-6")
            }
     } while (game.isNumberOfRoundsValid(numberOfRounds) != true)
    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    let count = 1;
     do {
        playRound(count);
        count++;
     } while (count <= numberOfRounds);
    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log('Player Score: ' + game.countOfPlayerWins);
    console.log('Computer Score: ' + game.countOfComputerWins);
    console.log('Tie Score: ' + game.countOfTies);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log('Round #' + roundNumber);
     console.log('Player Score: ' + game.countOfPlayerWins);
     console.log('Computer Score: ' + game.countOfComputerWins);
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    if (outcome === "player" || outcome === "computer") {
        console.log(`${outcome.toUpperCase()} WINS!`);
    } else {
        console.log(`TIE!`);
    }
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    this.playerSelection = prompt("Please select your option: 'Choose rock, paper or scissors'");
   
    switch(this.playerSelection.toLowerCase()) {
        case 'rock':
            playerSelection = 'rock';
            break;  
         case 'paper':
             playerSelection = 'paper';
         break;
         case 'scissors':
         playerSelection = 'scissors';
         break;
         default: playerSelection = 'rock';
         break;
    }
    console.log(`PLAYER: ${this.playerSelection}`);
    return playerSelection;
 }


