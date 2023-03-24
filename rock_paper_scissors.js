let computerScore = 0;
let userScore = 0;

let computerSelection;
let userSelection;

const selections = ['Rock', 'Paper', 'Scissors'];

function computerChoice() {
	let rndChoice = Math.floor(Math.random() * selections.length);
    
    if (rndChoice === 0) {
        console.log('Rock');
        return 'ROCK';
    } else if (rndChoice === 1) {
        console.log('Paper');
        return 'PAPER';
    } else if (rndChoice === 2) {
        console.log('Scissors');
        return 'SCISSORS';
    }
}
computerChoice();