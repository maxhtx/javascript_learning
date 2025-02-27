let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

updateScoreElement();

//Play Game Function
function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
    if (computerMove === 'Scissors') {
        result = 'Tie';
    }
    else if (computerMove === 'Rock') {
        result = 'Computer Wins';
    }
    else {
        result = 'You Win!';
    }
    }

    else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') {
        result = 'Tie';
    }
    else if (computerMove === 'Scissors') {
        result = 'Computer Wins';
    }
    else {
        result = 'You Win!';
    }

    }

    else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
        result = 'Tie';
    }
    else if (computerMove === 'Paper') {
        result = 'Computer Wins';
    }
    else {
        result = 'You Win!';
    }
    }

    if (result === 'You Win!') {
    score.Wins += 1;
    }  else if (result === 'Computer Wins') {
        score.Losses += 1;
    }  else if (result === 'Tie') {
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML 
    = `You 
    <img class = "move-icon" src = "images/${playerMove.toLowerCase()}-emoji.png">
    <img class = "move-icon" src = "images/${computerMove.toLowerCase()}-emoji.png">
    Computer`;
    }

//Update Score on Page
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

//Generate Computer Move
function pickComputerMove() {

    let computerMove = '';

    const randomNumber = (Math.random());

    if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
    }
    else {
    computerMove = 'Scissors';
    }

    return computerMove;
}

//Autoplay Function
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    
    if (!isAutoPlaying) {
        
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

        autoPlayButton = document.querySelector(".js-auto-play-button")
        autoPlayButton.innerHTML = "Stop Playing";
    
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;

        autoPlayButton.innerHTML = "Auto Play";
    }
}


//Event Listeners
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {playGame('Rock');});

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {playGame('Paper');});

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {playGame('Scissors');});

document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
        
        score.Wins = 0;
        score.Losses = 0;
        score.Ties = 0;
        
        localStorage.removeItem('score');
        
        updateScoreElement();
        
        alert(`Score Reset`)
    });

document.querySelector('.js-auto-play-button')
    .addEventListener('click', () => {autoPlay();});

///Play Game With Keys
document.body
    .addEventListener('keydown', (event) => {
        
        if (event.key === 'r') {
            playGame('Rock');
        }
        else if (event.key === 'p') {
            playGame('Paper');
        }
        else if (event.key === 's') {
            playGame('Scissors');
        }
    }
);