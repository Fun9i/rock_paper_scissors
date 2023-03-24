let computerScore = 0;
let userScore = 0;

const selections = ['Rock', 'Paper', 'Scissors'];

function computerChoice() {
	let rnd = Math.floor(Math.random() * selections.length);

	if (rnd === 0) {
		return 'rock';
	} else if (rnd === 1) {
		return 'paper';
	} else if (rnd === 2) {
		return 'scissors';
	}
}

function play(computerSelection, userSelection) {
    computerSelection = computerChoice()
    userSelection = prompt('Input your selection(rock, paper or scissors)', '');
    lowerCaseSelection = userSelection.toLowerCase();
    console.log(computerSelection);
    console.log('\n');
    console.log(lowerCaseSelection);
}