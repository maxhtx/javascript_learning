let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

updateScoreElement();

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

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

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