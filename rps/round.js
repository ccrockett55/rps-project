// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let computer = Math.floor(Math.random() * 4);
        
        switch (computer) {
            case 1: 
                this.computerSelection = 'rock';
                break;
            case 2:
                this.computerSelection = 'paper';
                break;
            case 3:
                this.computerSelection = 'scissors';
                break;
            default:
                this.computerSelection = 'rock';
                break;
        }
        console.log(`COMPUTER: ${this.computerSelection}`);
        return this.computerSelection.toLowerCase();
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner(playerSelection, computerSelection) {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        playerSelection = this.playerSelection;
        computerSelection = this.computerSelection;

        if (playerSelection === Selections.ROCK && computerSelection === Selections.ROCK) {
            return Outcomes.TIE;       
        } else if (playerSelection === Selections.ROCK && computerSelection === Selections.PAPER) {
            return Outcomes.COMPUTER_WINS;
        } else if (playerSelection === Selections.ROCK && computerSelection === Selections.SCISSORS) {
            return Outcomes.PLAYER_WINS;
        } else if (playerSelection === Selections.PAPER && computerSelection === Selections.ROCK) {
            return Outcomes.PLAYER_WINS;
        } else if (playerSelection === Selections.PAPER && computerSelection === Selections.PAPER) {
            return Outcomes.TIE;
        } else if (playerSelection === Selections.PAPER && computerSelection === Selections.SCISSORS) {
            return Outcomes.COMPUTER_WINS;
        } else if (playerSelection === Selections.SCISSORS && computerSelection === Selections.ROCK) {
            return Outcomes.COMPUTER_WINS;
        } else if (playerSelection === Selections.SCISSORS && computerSelection === Selections.PAPER) {
            return Outcomes.PLAYER_WINS;
        } else if (playerSelection === Selections.SCISSORS && computerSelection === Selections.SCISSORS) {
            return Outcomes.TIE;
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;