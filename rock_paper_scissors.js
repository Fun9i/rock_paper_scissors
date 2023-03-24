let computerScore = 0;
let userScore = 0;

let computerSelection;
let userSelection;

const selections = ['Rock', 'Paper', 'Scissors'];

function computerChoice() {
	let rnd = Math.floor(Math.random() * selections.length);

	if (rnd === 0) {
		console.log('rock');
		return 'rock';
	} else if (rnd === 1) {
		console.log('paper');
		return 'paper';
	} else if (rnd === 2) {
		console.log('scissors');
		return 'scissors';
	}
}

function play(computerSelection, userSelection) {
    computerSelection = computerChoice()
    userSelection = prompt('Input your selection(rock, paper or scissors)', '');
    lowerCaseSelection = userSelection.toLowerCase(); 
    console.log(lowerCaseSelection);
}