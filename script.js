//variables for playRound function
let roundTie = 0;
let playerScore = 0;
let computerScore = 0;

//function to generate computer choice
function getComputerChoice (){ 
  let cpuRandom;
  let getChoice = Math.floor((Math.random() * 3) + 1);
  if (getChoice === 1){
    cpuRandom = 'Rock';
    //select the span I would like to add the text in
    const computerText = document.querySelector('.computer-text')
    computerText.textContent = `Computer selection: ${cpuRandom}`;
  }
  else if (getChoice === 2){
    cpuRandom = 'Paper';
    const computerText = document.querySelector('.computer-text')
    computerText.textContent = `Computer selection: ${cpuRandom}`;
  }
  else if (getChoice === 3){
    cpuRandom = 'Scissors';
    const computerText = document.querySelector('.computer-text')
    computerText.textContent = `Computer selection: ${cpuRandom}`;
  }
return cpuRandom
}

// target the buttons and make them each individually selectable
const btnContainer = document.querySelector('#btn-container');
btnContainer.addEventListener('click', getSelection)

function getSelection (evt) {
  const playerText = document.querySelector('.player-text');
  playerText.textContent = `Player Selection: ${evt.target.dataset.selected}`;
  playerSelection = evt.target.dataset.selected;
  playRound()
}



//this function stores the conditional statements for win cases and tie case.
function playRound (){
  computerSelection = getComputerChoice()
  //defines the win cases for player.
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors')||(playerSelection === 'Paper' && computerSelection === 'Rock')||(playerSelection === 'Scissors' && computerSelection === 'Paper')){
    const playerScore = document.querySelector('.player-score')
    const span = document.createElement('span').textContent = '1'
    playerScore.append(span)
  }
//defines the win cases for computer.
  else if ((playerSelection === 'Rock' && computerSelection === 'Paper')||(playerSelection === 'Paper' && computerSelection === 'Scissors')||(playerSelection === 'Scissors' && computerSelection === 'Rock')){
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

//create onload function that makes the fade in div work when the document is opened
//create an arithmetic function that adds the total of each box per win
//create a function that loops the game until it is over which is a best 3 of 5
