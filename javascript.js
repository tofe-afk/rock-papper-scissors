

let button = document.querySelector('#buttons')
let rockBtn = document.querySelector('.rock')
let paperBtn= document.querySelector('.paper')
let scissorsBtn = document.querySelector('.scissors')
let currentDiv = document.querySelector('#results')

let humanChoice


function sdf() {return humanChoice='rock'}
function dfs() {return humanChoice='paper'}
function sfd() {return humanChoice='scissors'}


rockBtn.addEventListener("click", sdf)
paperBtn.addEventListener("click", dfs)
scissorsBtn.addEventListener("click", sfd)

/*function createTextRock() {
  const newDiv = document.createElement('div')
  const message= document.createTextNode(`It's a tie! You both picked ${humanChoice}`)
  newDiv.appendChild(message)
  currentDiv = document.body.insertBefore(newDiv, currentDiv)
}*/


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


    function createTextTie() {
      const newDiv = document.createElement('p')
      const message= document.createTextNode(`It's a tie! You both picked ${humanChoice}`)
      newDiv.appendChild(message)
      currentDiv = document.body.appendChild(newDiv, message)
    }

    function createTextWin() {
      const newDiv = document.createElement('p')
      const message = document.createTextNode(`You win! ${humanChoices} beats ${computerChoice}`)
      newDiv.appendChild(message)
      currentDiv = document.body.appendChild(newDiv, message)
    }

    function createTextLose() {
      const newDiv = document.createElement('p')
      const message = document.createTextNode(`You loose! ${computerChoice} beats ${humanChoices}`)
      newDiv.appendChild(message)
      currentDiv = document.body.appendChild(newDiv, message)
    }

   

      humanChoices=humanChoice

    if(humanChoices === computerChoice) {
      createTextTie();
       // return console.log(`It's a tie! You both picked ${humanChoices}`)
    } else if 
        ((humanChoices == 'rock' && computerChoice == 'scissors') ||
        (humanChoices == 'paper' && computerChoice == 'rock') ||
        (humanChoices == 'scissors' && computerChoice == 'paper')) {
            humanScore++; createTextWin(); //return console.log(`You win! ${humanChoices} beats ${computerChoice}`)
    } else {
        computerScore++; createTextLose(); //return console.log(`You loose! ${computerChoice} beats ${humanChoices}`)
        }
    
      }

      const computerSelection = getComputerChoice();
      
      

    playRound(humanChoice, computerSelection)

  
    function getTotalScore (x, z) {

      x=humanScore
      z=computerScore
      
      if (x==5 && x>z) { alert('You win against computer! Nice'); }
      else if (z==5) { alert('Computer beat you AHAH!!!'); }

    }
    



  console.log(`Your score is ${humanScore}`)
  console.log(`Computer score is ${computerScore}`)



  getTotalScore(humanScore, computerScore)


  if(humanScore===5) {humanScore=0; computerScore=0; location.reload();}
  else if (computerScore ===5 ) {humanScore=0; computerScore=0; location.reload();}

    
  }

button.addEventListener('click', playGame)


/*last thing to display players score on page, going to stop, spent enough days on the project
should be easy enough, create div with text in html and create function to change score with embedded*/