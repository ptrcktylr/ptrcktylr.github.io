// user gives input by clicking the div
// everything else is the same

// display score in html, use textcontent

const MOVES = ["rock", "paper", "scissors"]

const resultDisplay = document.querySelector('#result-display');
const gameOverDisplay = document.querySelector('#game-over-display');

function getRandInt(num) {
    // returns random number between 0 (inclusive) and num (exclusive)
    return Math.floor(Math.random() * Math.floor(num))
}

function getComputerMove() {
    return MOVES[getRandInt(3)] // gets random element from moves array
}

function playRound(playerMove, computerMove) {
    if (playerMove === "rock") { // ROCK //
        if (computerMove === "paper") { // rock and paper
            resultDisplay.textContent = "LOSS: ✊ vs ✋";
            return "loss"
        } else if (computerMove === "scissors") { // rock and scissors
            resultDisplay.textContent = "WIN: ✊ vs ✌";
            return "win"
        } else {
            resultDisplay.textContent = "TIE: ✊ vs ✊"; // rock and rock
            return "tie"
        }

    } else if (playerMove === "paper") { // PAPER //
        if (computerMove === "rock") { // paper and rock
            resultDisplay.textContent = "WIN: ✋ vs ✊";
            return "win"
        } else if (computerMove === "scissors") { // paper and scissors
            resultDisplay.textContent = "LOSS: ✋ vs ✌";
            return "loss"
        } else {
            resultDisplay.textContent = "TIE: ✋ vs ✋"; // paper and paper
            return "tie"
        }

    } else if (playerMove === "scissors") { // SCISSORS //
        if (computerMove === "paper") { // scissors and paper
            resultDisplay.textContent = "WIN: ✌ vs ✋";
            return "win"
        } else if (computerMove === "rock") { // scissors and rock
            resultDisplay.textContent = "LOSS: ✌ vs ✊";
            return "loss"
        } else {
            resultDisplay.textContent = "TIE: ✌ vs ✌"; // scissors and scissors
            return "tie"
        }

    } else {
        alert("Something went horribly wrong..")
        return null
    }
}

let playerScore = 0
let computerScore = 0

const playerScoreDisplay = document.querySelector('#player-score');
const compuerScoreDisplay = document.querySelector('#computer-score');

const buttons = document.querySelectorAll('.move-button');
buttons.forEach(button => {
    button.addEventListener("click", function () {
        gameOverDisplay.textContent = "";

        let result = playRound(this.id, getComputerMove())

        if (result == "win") {
            playerScore++;
        } else if (result == "loss") {
            computerScore++;
        } else {
            // do nothing, tie
        }

        updateScores();

        if (playerScore >= 5 || computerScore >= 5) {

            updateScores();

            if (playerScore > computerScore) {
                gameOverDisplay.textContent = "GAME OVER! YOU WIN!";
            } else {
                gameOverDisplay.textContent = "GAME OVER! YOU LOSE!";
            }

            // reset game

            playerScore = 0;
            computerScore = 0;

            updateScores();
        }

    })
});

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    compuerScoreDisplay.textContent = computerScore;
}