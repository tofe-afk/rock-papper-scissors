/* hello world to check if .js is properly linked*/

console.log('hello world') 

/*computer choice function with math.random method and math.floor for rounding floating-point number*/

function getComputerChoice() {
    let number = Math.floor(Math.random()*10);
    if(number <=3 ) {
      return 'rock'
    } else if (number <= 6) {
      return 'paper'
    } else {return 'scissors'}
}

/*human choice function with prompt method*/

function getHumanChoice() {
    return prompt('Choose rock, paper or scissors')
}

/*play round function wrapped in play game function, 4 days lost on this figuring a solution to this btw...credited the user for the solution in the README*/

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound (humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        return console.log(`It's a tie! You both picked ${humanChoice}`)
    } else if 
        ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            humanScore++; return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++; return console.log(`You loose! ${computerChoice} beats ${humanChoice}`)}
    }
  


  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  }

  
  function getTotalScore (x, z) {
    
    
    if (x>z) { return console.log('You win against computer! Nice')}
    else if(x<z) { return console.log('Computer beat you AHAH!!!')}
    else {return console.log('Well...thats a tie, boooring')}
    }
    

  console.log(`Your score is ${humanScore}`)
  console.log(`Computer score is ${computerScore}`)


  getTotalScore(humanScore, computerScore)


}


playGame()

/*cleaned up code for better readability*/

