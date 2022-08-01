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

//chosing rock paper scissor

//chpsing Rock
document.getElementById('rock').addEventListener('click', function () {
  Refresh();
  dhekh.classList.remove('hidden');
  rockConst.classList.remove('hidden');

  playerSelection = 'rock';
  play(playerSelection, computerSelection);
});

//chosing paper
document.getElementById('paper').addEventListener('click', function () {
  Refresh();
  dhekh.classList.remove('hidden');
  paperConst.classList.remove('hidden');
  playerSelection = 'paper';
  play(playerSelection, computerSelection);
});

//chosing Scissor
document.getElementById('Scissor').addEventListener('click', function () {
  //rockConst.classList.add("hidden");
  Refresh();
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

//Game
function play(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    displayy('Its a tie! close one');
  } else {
    if (
      (playerSelection == 'rock' && computerSelection == 'scissor') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissor' && computerSelection == 'paper')
    ) {
      displayy('YOU WON THIS ROUND!');
      playerScore = playerScore + 1;
      keepPlayerScore();
      keepCpuScore();
    } else {
      displayy('you lost this round, try again');
      computerScore = computerScore + 1;
      keepPlayerScore();
      keepCpuScore();
    }
  }
}

//resetGame
function resetGame() {
  computerScore = 0;
  playerScore = 0;
  Refresh();
}

//display
function displayy(str) {
  document.getElementById('resultt').innerHTML = str;
}

//function to update indivual score
function keepPlayerScore() {
  let plscore = document.getElementById('mypoint');
  plscore.textContent = playerScore;
}

//update cpu score
function keepCpuScore() {
  let cpuscore = document.getElementById('comppoint');
  cpuscore.textContent = computerScore;
}

// refresh game removes old string
function Refresh() {
  paperConst.classList.add('hidden');
  scissorConst.classList.add('hidden');
  rockConst.classList.add('hidden');
}
