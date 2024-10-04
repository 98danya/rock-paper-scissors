function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const userInput = prompt("Rock, Paper or Scissors? What is your choice?").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Your choice is invalid. Try again!");
        return null;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return console.log("It's a tie. Try again!");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return console.log("Your Choice: " + humanChoice + " The Computer's Choice: " + computerChoice + "\nCongrats! You won this round." + "\nYour current score: " + humanScore + " And the computer's score: " + computerScore);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return console.log("Your Choice: " + humanChoice + " The Computer's Choice: " + computerChoice + "\nCongrats! You won this round." + "\nYour current score: " + humanScore + " And the computer's score: " + computerScore);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return console.log("Your Choice: " + humanChoice + " The Computer's Choice: " + computerChoice + "\nCongrats! You won this round." + "\nYour current score: " + humanScore + " And the computer's score: " + computerScore);
        } else {
            computerScore++;
            return console.log("Your Choice: " + humanChoice + " The Computer's Choice: " + computerChoice + "\nYou lost. Better luck next time!" + "\nYour current score: " + humanScore + " And the computer's score: " + computerScore);
        }
    } 

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();

