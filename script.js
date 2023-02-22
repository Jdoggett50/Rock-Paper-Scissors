let roundTie = 0;
let playerTally = 1;
let computerTally = 1;

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
  getWinner()
}


//this function stores the conditional statements for win cases and tie case.
function playRound (){
  computerSelection = getComputerChoice()
  //defines the win cases for player.
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors')||(playerSelection === 'Paper' && computerSelection === 'Rock')||(playerSelection === 'Scissors' && computerSelection === 'Paper')){
    const spanContent = document.querySelector('.player-score').textContent = `${playerTally}`
    return ++playerTally
  }
//defines the win cases for computer.
  else if ((playerSelection === 'Rock' && computerSelection === 'Paper')||(playerSelection === 'Paper' && computerSelection === 'Scissors')||(playerSelection === 'Scissors' && computerSelection === 'Rock')){
    const spanContent = document.querySelector('.computer-score').textContent = `${computerTally}`
    return ++computerTally
  }
//defines the tie case.
  else if (playerSelection === computerSelection){
    //make this a smirk faced box later
    alert('The round is tied...');
  }
}

function getWinner(){
  if (playerTally == 4){
    alert ('player has won!')
  } else if (computerTally == 4){
    alert ('computer has won!')
  }
}

//create onload function that makes the fade in div work when the document is opened