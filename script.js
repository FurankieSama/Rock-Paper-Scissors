// 1. Select DOM elements
const humanScorePara = document.querySelector("#human-score");
const computerScorePara = document.querySelector("#computer-score");
const roundResults = document.querySelector("#round-results");
const finalWinner = document.querySelector("#final-winner");
const playerOption = document.querySelector(".selector");

// 2. Global State
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// 3. Event Listener
playerOption.addEventListener("click", (e) => {
  if (gameOver) return;

  if (e.target.classList.contains("choice")) {
    const humanChoice = e.target.textContent.toLowerCase().trim();
    playRound(humanChoice, getComputerChoice());
  }
});

function getComputerChoice() {
  const gameOptions = ["rock", "paper", "scissors"];
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// 4. Game Logic with DOM Updates
function playRound(humanChoice, computerOption) {
  let resultText = "";

  const winnerIsHuman =
    (humanChoice === "rock" && computerOption === "scissors") ||
    (humanChoice === "paper" && computerOption === "rock") ||
    (humanChoice === "scissors" && computerOption === "paper");

  if (computerOption === humanChoice) {
    resultText = `It's a tie! You both chose ${humanChoice}.`;
  } else if (winnerIsHuman) {
    humanScore++;
    resultText = `Point for you! ${humanChoice} beats ${computerOption}.`;
  } else {
    computerScore++;
    resultText = `Point for Computer! ${computerOption} beats ${humanChoice}.`;
  }

  // Update Scoreboard Text
  humanScorePara.textContent = humanScore;
  computerScorePara.textContent = computerScore;
  roundResults.textContent = resultText;

  // Check for ultimate winner
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    if (humanScore === 5) {
      finalWinner.textContent = "Victory! You reached 5 points first!";
      finalWinner.style.color = "green";
    } else {
      finalWinner.textContent = "Game Over! The Computer beat you to 5.";
      finalWinner.style.color = "red";
    }
  }
}
