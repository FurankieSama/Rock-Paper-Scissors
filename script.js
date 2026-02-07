// GetComputerChoice: Chooses between three options for computer
// Rock Paper, and Scissors
function getComputerChoice() {
  // F*ck it, I'm using an array because it's more efficient
  // Declare array
  const gameOptions = ["rock", "paper", "scissors"];

  // Return random array value
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// getHumanChoice: collect user input
function getHumanChoice() {
  let humanChoice = prompt("Enter a choice: ").toLowerCase();
  return humanChoice;
}

// PlayGame
function PlayGame() {
  // declare playRound function and global variables
  // Global variables for holding scores
  let humanScore = 0;
  let computerScore = 0;

  // playRound: Play a round of the game
  function playRound(playerChoice, computerChoice) {
    // format the human choice
    const humanChoice = playerChoice.trim();
    const computerOption = computerChoice;

    // Compare the human choice, but first make sure the input is correct
    if (
      !(
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
      )
    ) {
      console.log("Invalid response!!");
      return;
    }
    // Compare options chosen
    let wager =
      (humanChoice === "rock" && computerOption === "scissors") ||
      (humanChoice === "paper" && computerOption === "rock") ||
      (humanChoice === "scissors" && computerOption === "paper");

    // Check if Strings are equal
    if (computerOption === humanChoice) {
      // Check if tie
      console.log("It's a tie");
      return;
    } else if (wager) {
      // If the human wins
      humanScore++;
      console.log(`Human wins: ${humanChoice} beats ${computerOption}!!!`);
    } else {
      computerScore++;
      console.log(`Computer wins: ${computerOption} beats ${humanChoice}!!!`);
    }
  }

  // loop
  let indx = 0
  for (let index = 0; index < 5; index++) {
    playRound(getHumanChoice(), getComputerChoice());
    indx++
  }

  // Print out winner
  if (humanScore > computerScore) {
    console.log(`You win: ${humanScore} / ${indx} times`);
  } else if (humanScore < computerScore) {
    console.log(`Computer wins: ${computerScore} / ${indx} times`);
  } else {
    console.log(`It's a tie`);
  }
}

// Call function
PlayGame();
