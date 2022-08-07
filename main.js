//query selectors here
const boardBanner = document.querySelector('.board__banner');
const boardGame = document.querySelector('.board__game');
const gameBoxes = document.querySelectorAll('.board__game--box');
const player1Token = document.querySelector('.player__1');
const player1Score = document.querySelector('.player1__score');
const player2Token = document.querySelector('.player__2');
const player2Score = document.querySelector('.player2__score');

//global variables here
const currentGame = new Game('Bubble Tea', 'Take Out Coffee');
const player1 = currentGame.player1;
const player2 = currentGame.player2;
const bubbleTeaToken = `<img class="player__1 player__token--smaller" src="./assets/icons8-bubble-tea-80.png" alt="Bubble tea token">`;
const coffeeCupToken = `<img class="player__2 player__token--smaller" src="./assets/icons8-coffee-to-go-80.png" alt="Coffee token">`;

//event listeners here
window.addEventListener('load', setUpBoard);

for (let i = 0; i < gameBoxes.length; i++) {
  const gameBox = gameBoxes[i];
  
  gameBox.addEventListener('click', function() {
    currentGame.addTokenToBoard(i);
    showTokensOnBoard(gameBox, i);
    currentGame.checkForWinner(); 
    declarePlayerTurn();
    declareMatch();
    changeScore();

  });
}
// setTimeout(createBoard, 5000);

//functions here
function setUpBoard() {
  currentGame.createBoard();
  
  declarePlayerTurn();

  clearScores(player1);

  clearScores(player2);
}

function declarePlayerTurn() {
  let playerToken =  renderPlayerToken();
  
  boardBanner.innerHTML = `<h1 class="board__title">It is ${playerToken}'s turn!</h1>`;
}

function renderPlayerToken() {  

  if (currentGame.playerTurn === player1.token) {
    return bubbleTeaToken;

  } else {
    return coffeeCupToken;
  }
}

function showTokensOnBoard(box, index) {
  
  if (currentGame.board[index] === 'Bubble Tea') {
    box.innerHTML = bubbleTeaToken;

  } else {
    box.innerHTML = coffeeCupToken;
  }
}

function getTokenImg(winner) {
  if (winner === 'Bubble Tea') {
    return bubbleTeaToken;

  } else {
    return coffeeCupToken
  }
}

function declareMatch() {
  if (currentGame.winner) {
    boardBanner.innerHTML = `<h1 class="board__title">${getTokenImg(currentGame.winner)} wins!</h1>`;

  } else if (!currentGame.board.includes('')) {
    boardBanner.innerHTML = `<h1 class="board__title">It's a draw!</h1>`;
  }

}


function changeScore() {
  
  if (currentGame.winner === player1.token) {
    player1.wins += 1;
    
    player1Score.innerText = `${player1.wins} wins`;
  } 

  if (currentGame.winner === player2.token) {
    player2.wins += 1;

    player2Score.innerText = `${player2.wins} wins`;
  }
}

function clearScores(player) {
  player.wins = 0;
}


