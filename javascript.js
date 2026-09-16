

let button = document.querySelector('#buttons')
let rockBtn = document.querySelector('.rock')
let paperBtn= document.querySelector('.paper')
let scissorsBtn = document.querySelector('.scissors')


let humanChoice


  function sdf() {return humanChoice='rock'}
  function dfs() {return humanChoice='paper'}
  function sfd() {return humanChoice='scissors'}


   rockBtn.addEventListener("click", sdf)
   paperBtn.addEventListener("click", dfs)
   scissorsBtn.addEventListener("click", sfd)



function getComputerChoice() {
    let number = Math.floor(Math.random()*10);
    if(number <=3 ) {
      return 'rock'
    } else if (number <= 6) {
      return 'paper'
    } else {return 'scissors'}
}


  let humanScore = 0
  let computerScore = 0


function playGame() {

  
  

  function playRound (humanChoices, computerChoice) {
      humanChoices=humanChoice

    if(humanChoices === computerChoice) {
        return console.log(`It's a tie! You both picked ${humanChoices}`)
    } else if 
        ((humanChoices == 'rock' && computerChoice == 'scissors') ||
        (humanChoices == 'paper' && computerChoice == 'rock') ||
        (humanChoices == 'scissors' && computerChoice == 'paper')) {
            humanScore++; return console.log(`You win! ${humanChoices} beats ${computerChoice}`)
    } else {
        computerScore++; return console.log(`You loose! ${computerChoice} beats ${humanChoices}`)}
    
      }

      const computerSelection = getComputerChoice();
      
      

    playRound(humanChoice, computerSelection)

  
  function getTotalScore (x, z) {

    x=humanScore
    z=computerScore
    
    if (x==5 && x>z) {return console.log('You win against computer! Nice')}
    else if (z==5) {return console.log('Computer beat you AHAH!!!')}
    //else if (x==5 && z==5) {return console.log('Well...thats a tie, boooring')}
    }
    

  console.log(`Your score is ${humanScore}`)
  console.log(`Computer score is ${computerScore}`)



  getTotalScore(humanScore, computerScore)


  if(humanScore===5) {humanScore=0; computerScore=0}
  else if (computerScore ===5 ) {humanScore=0; computerScore=0}
    
  }

button.addEventListener('click', playGame)