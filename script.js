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

