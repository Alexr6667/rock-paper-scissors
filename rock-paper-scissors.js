

const computerPlay = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    
    switch (computerChoice){
        case 0:
        return `rock`;
        break;
        case 1:
        return `paper`;
        break;
        case 2:
        return `scissors`;
        break;
    }
}

const userPlay = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === `rock` || userInput === `paper` || userInput === `scissors`){
        return userInput;
    } else {
        return `Invalid word. Please type either rock, paper or scissors`;
    }
}

const compareInputs = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return `the user and computer have tied`;
    }
    
    if (userChoice === `paper`){
        if(computerChoice === `scissors`){
        return `Computer chose scissors and has won`;
    } else {
        return `User chose paper and has won`;
        }
    }
    
    if (userChoice === `rock`){
        if(computerChoice === `paper`){
        return `Computer chose paper and has won`;
    } else {
        return `User chose rock and has won`;
        }
    }
    
    if (userChoice === `scissors`){
        if(computerChoice === `rock`){
        return `Computer chose rock and has won`;
    } else {
        return `User chose scissors and has won`;
        }
    }
}

const playGame = () => {
    let userChoice = userPlay(window.prompt());
    let computerChoice = computerPlay();
    console.log(`Computer chose ${computerChoice}`);
    console.log(`User chose ${userChoice}`);
    console.log(compareInputs(userChoice, computerChoice));
}








