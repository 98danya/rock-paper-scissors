function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    const userInput = prompt("Rock, Paper or Scissors? What is your choice?");
    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        return console.log("Your choice: " + userInput);
    } else {
        console.log("Your choice is invalid. Try again!");
    }
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return console.log("It's a tie. Try again!");
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            return console.log("Your Choice: " + humanChoice + "The Computer's Choice: " + computerChoice + "/nCongrats! You won this round. Your current score: " + humanScore + " And the computer's score: " + computerScore);
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            return console.log("Your Choice: " + humanChoice + "The Computer's Choice: " + computerChoice + "/nCongrats! You won this round. Your current score: " + humanScore + " And the computer's score: " + computerScore);
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            return console.log("Your Choice: " + humanChoice + "The Computer's Choice: " + computerChoice + "/nCongrats! You won this round. Your current score: " + humanScore + " And the computer's score: " + computerScore);
        } else {
            computerScore++;
            return console.log("You lost. Better luck next time! Your current score: " + humanScore + " And the computer's score: " + computerScore);
        }
    } 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    console.log(playRound(humanSelection, computerSelection));
}

console.log(playGame());


// Problems that need to be fixed!
// 1. Human Choice is not case-insensitive
// 2. Only one round is being played. Five rounds should be played!
// (3. This is minimal: But the computer's choice is not being displayed!)

