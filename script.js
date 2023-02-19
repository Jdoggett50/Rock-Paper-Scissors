//variables for playRound function
let roundTie = 0;
let playerScore = 0;
let computerScore = 0;

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

//function to generate computer choice
function getComputerChoice (computerChoice){ 
  let getChoice = Math.floor((Math.random() * 3) + 1);
  const computerSelection = document.querySelector('.computer-selection')
  if (getChoice === 1){
    computerSelection.textContent = 'Computer Selection: Rock'
    computerChoice = 'Rock';
  }
  else if (getChoice === 2){
    computerSelection.textContent = 'Computer Selection: Paper'
    computerChoice = 'Paper';
  }
  else if (getChoice === 3){
    computerSelection.textContent = 'Computer Selection: Scissors'
    computerChoice = 'Scissors';
  }
    return computerChoice
}
console.log(getComputerChoice())

function getScore(){
  //defines the win cases for player.
  let playerChoice = 'rock';
  let computerChoice = 'paper';
  if ((playerChoice === 'rock' && computerChoice === 'scissors')||(playerChoice === 'paper' && computerChoice === 'rock')||(playerChoice === 'scissors' && computerChoice === 'paper')){
    alert('Player has scored!');
    const playerScore = document.querySelector('.player-score');
    const span = document.createElement('span').textContent = '1'
    playerScore.append(span)
  }
  //defines the win cases for computer.
  else if ((playerChoice === 'rock' && computerChoice === 'paper')||(playerChoice === 'paper' && computerChoice === 'scissors')||(playerChoice === 'scissors' && computerChoice === 'rock')){
    alert('Computer has scored...');
    const computerScore = document.querySelector('.computer-score');
    const span = document.createElement('span').textContent = '1'
    computerScore.append(span)
  }
  //defines the tie case.
  else if (playerChoice === computerChoice){
    alert('The round is tied...');
    return
  } 
 } getScore()
  
//target the buttons and make them each individually selectable
const btnContainer = document.querySelector('#btn-container');




