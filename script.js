// GetComputerChoice: Chooses between three options for computer
// Rock Paper, and Scissors
function getComputerChoice() {
    // F*ck it, I'm using an array because it's more efficient
    // Declare array
    const gameOptions = ["rock", "paper", "scissors"]
    
    // Return random array value
    return (gameOptions[Math.floor((Math.random() * (gameOptions.length )))])
}

// getHumanChoice: collect user input
function getHumanChoice() {
    let humanChoice = prompt("Enter a choice: ").toLowerCase()
    return humanChoice;
}

// Global variables for holding scores
let humanScore = 0
let computerScore = 0


// playRound: Play a round of the game
function playRound(playerChoice, computerChoice) {

    // Ensure player choice matches
    let ensureMatch = (playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors")
    if (!ensureMatch) {
        console.log("Invalid entry")
        return
    }
    // Simple boolean to check winner
    let checkResult = (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")
    
    // Compare the values
    if (checkResult) {
        humanScore++
        console.log("Human wins")
    } else if (!checkResult) {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
    }
    else {
        console.log("It's a tie")
    }
}

playRound(getHumanChoice(), getComputerChoice())