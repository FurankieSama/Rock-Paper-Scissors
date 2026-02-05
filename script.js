// GetComputerChoice: Chooses between three options 
// Rock Paper, and Scissors
function getComputerChoice() {
    // F*ck it, I'm using an array because it's more efficient
    // Declare array
    const gameOptions = ["rock", "paper", "scissors"]
    
    // Return random array value
    return (gameOptions[Math.floor((Math.random() * (gameOptions.length )))])
}
