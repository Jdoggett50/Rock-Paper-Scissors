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

let computerSelection = getComputerChoice ()

//this function stores the conditional statements for win cases and tie case.
function playRound (playerSelection,computerSelection){
//defines the win cases for player.
  if ((playerSelection === 'rock' && computerSelection === 'scissors')||(playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')){
    alert('Player has scored!');
    return ++playerScore
  }
//defines the win cases for computer.
  else if ((playerSelection === 'rock' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')){
    alert('Computer has scored...');
    return ++computerScore
  }
//defines the tie case.
  else if (playerSelection === computerSelection){
    alert('The round is tied...');
    return ++roundTie
  } 
}


//initialize round loop counter to 5
//make infinite loop until first to 3 wins
function game(playerSelection){
  while (false){
    if (playerScore === 3 && playerScore > computerScore){
      return alert('player has won!')
    } else {
      return alert ('computer has won!')
    }
    playerSelection = ''
    i++
  }
}
// function game(playerSelection){
//   for (let i = 0; i < 5; i++){
//     playerSelection = ''
//     computerSelection = getComputerChoice ()
//     playRound(playerSelection.toLowerCase(),computerSelection)
//   }
// }  

function roundTally(computerScore, playerScore){
  if (computerScore > playerScore){
    return alert('computer has won!')
  }
  else if (playerScore > computerScore){
    return alert('player has won!')
  }
}

//target the buttons and make them each individually selectable
const btnContainer = document.querySelector('#btn-container');

btnContainer.addEventListener('click', getSelection)

function getSelection (evt) {
  const span = document.querySelector('span')
  span.textContent = `Player Selection: ${evt.target.dataset.select}`;
}