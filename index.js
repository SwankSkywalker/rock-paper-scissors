// Function for computer Selection of RPS



function compuChoice() {
   let num = (Math.floor(Math.random() * 3))
    if (num === 0) {
    return 'Rock';
    } 
    else if (num === 1) {
        return 'Paper';
    }
    else if (num === 2){
        return 'Scissors';
    }

}
console.log(compuChoice());

//function that plays a single round of RPS


function singleRound(playerSelection, compuChoice) {
   
    if (compuChoice === 'Paper' && playerSelection === 'Rock') {
        return 'You lose! Paper beats Rock!';
    }
    else if (compuChoice === 'Scissors' && playerSelection === 'Rock') {
        return 'You win! Rock beats Scissors!';
    }
    else if (compuChoice === 'Rock' && playerSelection === 'Rock') {
        return "It's a tie!";
    }
    else if (compuChoice === 'Paper' && playerSelection === 'Paper') {
        return "It's a tie!";
    }
    else if (compuChoice === 'Paper' && playerSelection === 'Scissors') {
        return 'You Win! Scissors beats paper!';
    }
    else if (compuChoice === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose! Scissors beats paper!';
    }
    else if (compuChoice === 'Scissors' && playerSelection === 'Scissors') {
        return "It's a tie!";
    }
    else if (compuChoice === 'Rock' && playerSelection === 'Scissors') {
        return 'You lose! Rock beats scissors!';
    }
    else if (compuChoice === 'Rock' && playerSelection === 'Paper') {
        return 'You win! Paper beats rock!';
    }
}
let playerSelection = prompt('Rock, Paper, Scissors');
let compuSelection = compuChoice();
console.log(singleRound(playerSelection, compuSelection));
