// Declare variables for score
let humanScore = 0;
let computerScore = 0;

// Input user choice
function getHumanChoice() {
    let userChoice = prompt("Enter your choice");
    return userChoice.toLowerCase();
}


// Get computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // Random number generated from [0,3) and floored
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissor";
    }
}

// Play 1 round
function printChoice(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice} \t Computer: ${computerChoice}`);
}

function playRound(humanChoice, computerChoice) {
    let winner = null;
    printChoice(humanChoice, computerChoice);

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a draw! No points are awarded.");
        } else if (computerChoice == "paper") {
            winner = "computer"
        } else {
            winner = "human";
        }


    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            winner = "human";
        } else if (computerChoice == "paper") {
            console.log("It's a draw! No points are awarded.");
        } else {
            winner = "computer"
        }
        

    } else {
        if (computerChoice == "rock") {
            winner = "computer"
        } else if (computerChoice == "paper") {
            winner = "human";
        } else {
            console.log("It's a draw! No points are awarded.");
        }
    }

    if (winner) {
        roundWin(winner);
    }
}

// Print winner and increment score
function printScore() {
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}

function roundWin(winner) {
    if (winner == "human") {
        humanScore++;
    }
    else {
        computerScore++
    }
    console.log (`Winner: ${winner}`);
    printScore();
}


// Play game function
function main() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

// Game start
main();