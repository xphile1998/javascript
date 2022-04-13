// rps.js - Rock, Paper, Scissors

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie.';
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'bomb') {
        return 'You cheated and used a bomb! You won!';
    }
};

function playGame() {
    const userChoice = getUserChoice('bomb');
    console.log(`You chose ${userChoice}.`);
    
    const computerChoice = getComputerChoice();
    console.log(`The computer chose ${computerChoice}.`);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
