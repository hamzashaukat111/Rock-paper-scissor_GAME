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
document.getElementById('rock').addEventListener('click', function () {});
//user

//computer choses
function comp() {
  let CHOICE = Math.trunc(Math.random() * 3);
  ruk = Math.trunc(Math.random() * 3);
  computerSelection = option[ruk];
}

comp();
document.getElementById('compchoice').innerHTML = `${computerSelection}`;

console.log(computerSelection);
console.log(ruk);
