'use strict';
//7
//ComputerGame

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let ruk;
const option = ['rock', 'paper', 'Scissor'];

//user chooses option
//document.getElementById
const dhekh = document.querySelector('.dhekho');
const rockConst = document.getElementById('ROCK');
const paperConst = document.getElementById('PAPER');
const scissorConst = document.getElementById('SCISSOR');

//chpsing Rock
document.getElementById('rock').addEventListener('click', function () {
  dhekh.classList.remove('hidden');
  rockConst.classList.remove('hidden');
  playerSelection = 'rock';
  play(playerSelection, computerSelection);
});

//chosing paper
document.getElementById('paper').addEventListener('click', function () {
  dhekh.classList.remove('hidden');
  paperConst.classList.remove('hidden');
  playerSelection = 'paper';
  play(playerSelection, computerSelection);
});

//chosing Scissor
document.getElementById('Scissor').addEventListener('click', function () {
  dhekh.classList.remove('hidden');
  scissorConst.classList.remove('hidden');
  playerSelection = 'Scissor';
  play(playerSelection, computerSelection);
});
//user

//computer choses
function comp() {
  ruk = Math.trunc(Math.random() * 3);
  computerSelection = option[ruk];
}

comp();
document.getElementById('compchoice').innerHTML = `${computerSelection}`;

console.log(computerSelection);
console.log(ruk);

//play again
function again() {
  rockConst.classList.add('hidden');
  paperConst.classList.add('hidden');
  scissorConst.classList.add('hidden');
}

//Game
function play(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    displayy('Its a tie! close one');
  } else {
    displayy(' close one');
  }
}

//resetGame
function resetGame() {
  computerScore = 0;
  playerScore = 0;
}

//display
function displayy(str) {
  document.getElementById('resultt').innerHTML = str;
}
