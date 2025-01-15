// flex-grow factor array
const flexValues = [0.02, 0.15, 0.4, 0.65, 1, 1.5, 2.3, 4, 30];
let counter = 4;

// Getting reference to html nodes
let rock = document.querySelector('div.left img.rock');
let paper = document.querySelector('div.left img.paper');
let scissors = document.querySelector('div.left img.scissors');
let computerChoiceDisplay = document.querySelector('.right img');
let beam = document.querySelector('.beam')
let wizBeam = document.querySelector('.wiz-beam');
let grimBeam = document.querySelector('.grim-beam')


// Adding event listeners
rock.addEventListener('click', () => {
    playRound('rock');
});

paper.addEventListener('click', () => {
    playRound('paper');
});

scissors.addEventListener('click', () => {
    playRound('scisors');
});

function playRound(humanChoice) {
    let winner = null;
    let computerChoice = getComputerChoice();

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
        updateGame(winner);
    }
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // Gives 0, 1, 2 randomly
    let choice;

    switch(randomNum) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }

    computerChoiceDisplay.classList.remove(...computerChoiceDisplay.classList) // removes every class
    computerChoiceDisplay.classList.add(`${choice}`)
    computerChoiceDisplay.setAttribute('src', `./images/${choice}.png`);
    computerChoiceDisplay.setAttribute('alt', `The computer chose ${choice}`);

    return choice;
}

function updateGame(winner) {
    if (counter > -1 && counter < 9) {
        if (winner == 'human') {
            counter++;
        } else {
            counter--;
        }
        console.log(counter)
        wizBeam.style.flexGrow = flexValues[counter];

    } else {
        quitGame(counter);
    }
}

function quitGame(counter) {
    if (counter > 0) {
        beam.removeChild(grimBeam); 
    } else {
        beam.removeChild(wizBeam);
    }
}