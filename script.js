//variables for playRound function
let roundTie = 0;
let playerScore = 0;
let computerScore = 0;

//function to generate computer choice
function getComputerChoice (){ 
  let cpuRandom;
  let getChoice = Math.floor((Math.random() * 3) + 1);
  if (getChoice === 1){
    cpuRandom = 'rock';
  }
  else if (getChoice === 2){
    cpuRandom = 'paper';
  }
  else if (getChoice === 3){
    cpuRandom = 'scissors';
  }
return cpuRandom
}

// target the buttons and make them each individually selectable
const btnContainer = document.querySelector('#btn-container');
btnContainer.addEventListener('click', getSelection)

function getSelection (evt) {
  playerSelection = evt.target.dataset.selected;
  playRound()
}



//this function stores the conditional statements for win cases and tie case.
function playRound (){
  computerSelection = getComputerChoice()
  //defines the win cases for player.
  if ((playerSelection === 'rock' && computerSelection === 'scissors')||(playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')){
    const playerScore = document.querySelector('.player-score')
    const span = document.createElement('span').textContent = '1'
    playerScore.append(span)
  }
//defines the win cases for computer.
  else if ((playerSelection === 'rock' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')){
    const computerScore = document.querySelector('.computer-score')
    const span = document.createElement('span').textContent = '1'
    computerScore.append(span)
  }
//defines the tie case.
  else if (playerSelection === computerSelection){
    //make this a smirk faced box later
    alert('The round is tied...');
  } 
}



