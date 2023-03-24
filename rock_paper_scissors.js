let computerScore = 0;
let userScore = 0;

let computerSelection;
let userSelection;

const selections = ['Rock', 'Paper', 'Scissors'];

function computerChoice() {
	let rnd = Math.floor(Math.random() * selections.length);

    if (rnd === 0) {
        console.log('Rock');
        return 'ROCK';
    } else if (rnd === 1) {
        console.log('Paper');
        return 'PAPER';
    } else if (rnd === 2) {
        console.log('Scissors');
        return 'SCISSORS';
    }
}
computerChoice();