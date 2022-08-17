let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Computer choice
function computerChoice() {
  let random = (Math.floor(Math.random() * 3));
  if (random === 0) {
    return "paper";
  } else if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "scissors";
  }
}

//Plays one round of RPS
function playRound(playerChoice, computerSelection) {
  if (playerChoice === computerSelection) {
    return draw;
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    return playerWinRound;

  } else if (playerChoice === "paper" && computerSelection === "rock") {
    return playerWinRound;

  } else if (playerChoice === "scissors" && computerSelection === "paper") {
    return playerWinRound;

  } else {
    return computerWinRound;

  }
}

//Specifies round win/game win messages
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"


//For loop that plays until someone reaches 5 wins
for (let i = 0; i < 100; i++) {
  let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  const computerSelection = computerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
  game(roundResult);
  console.log("Your score is " + playerScore);
  console.log("The computer's score is " + computerScore);

  if (playerScore === 5 || computerScore === 5) {
    break;
  }
}


//Score keeping and outputs correct messages based on score
function game(result) {

  if (result === playerWinRound) {
    playerScore++;
  } else if (result === draw) {
    draws++;
  } else {
    computerScore++;
  }


  if (playerScore === 5) {
    console.log(playerWin);
    return;
  }
  if (computerScore === 5) {
    console.log(computerWin);
    return;
  }
}