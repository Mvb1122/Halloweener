exports.rockPaperScissors = (userInput) => {
  console.log(`Somebody's playing RPS. They chose ${userInput}.`)
  function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: invalid user choice.');
    }
  }
  function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Tie!';
    }
    if (userChoice === 'bomb') {
      return 'You win, you cheater.';
      // just a lil sneaky easter-egg for y'all.
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return ('You lost, the computer chose ' + computerChoice + '.');
      } else {
        return ('You won, the computer chose ' + computerChoice + '.');
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return ('You won, the computer chose ' + computerChoice + '.');
      } else {
        return ('You lost, the computer chose ' + computerChoice + '.');
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return ('You won, the computer chose ' + computerChoice + '.');
      } else {
        return ('You lost, the computer chose ' + computerChoice + '.');
      }
    }
  }
 function playGame(choice) {
  let userChoice = getUserChoice(choice);
  let computerChoice = getComputerChoice();
  // console.log('The computer chose: ' + computerChoice + '.');
  return(determineWinner(userChoice, computerChoice))
}
return playGame(userInput)
}