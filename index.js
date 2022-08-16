let myScore = 0
let compScore = 0

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
//console.log(compuChoice());

//function that plays a single round of RPS

function playRound(playerSelection, compuChoice) {
   
    if (compuChoice === 'Paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats Rock!';
    }
    else if (compuChoice === 'Scissors' && playerSelection === 'rock') {
        return 'You win! Rock beats Scissors!';
    }
    else if (compuChoice === 'Rock' && playerSelection === 'rock') {
        return "It's a tie!";
    }
    else if (compuChoice === 'Paper' && playerSelection === 'paper') {
        return "It's a tie!";
    }
    else if (compuChoice === 'Paper' && playerSelection === 'scissors') {
        return 'You Win! Scissors beats paper!';
    }
    else if (compuChoice === 'Scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats paper!';
    }
    else if (compuChoice === 'Scissors' && playerSelection === 'scissors') {
        return "It's a tie!";
    }
    else if (compuChoice === 'Rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats scissors!';
    }
    else if (compuChoice === 'Rock' && playerSelection === 'paper') {
        return 'You win! Paper beats rock!';
    }
}
let playerSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
let compuSelection = compuChoice();
console.log(playRound(playerSelection, compuSelection));


//function that makes games 5 rounds 

function game() {
    playRound(playerSelection, compuChoice);
    for (let i = 0; i < 5; i++) {
        if (playerSelection === 'rock' && compuChoice === 'Scissors') {
            console.log('You win!' && ++myScore);
        } else {
            console.log('You lose!' &&  ++compScore);
        }
    }
}
console.log(game());





