//query selectors here
const boardHeader = document.querySelector('.board__header');
const boardGame = document.querySelector('.board__game');
const gameBoxes = document.querySelectorAll('.board__game--box');
// console.log(gameBoxes);
const player1Token = document.querySelector('.player__1');
const player1Score = document.querySelector('.player1__score');
const player2Token = document.querySelector('.player__2');
const player2Score = document.querySelector('.player2__score');


//global variables here
const currentGame = new Game('Bubble Tea', 'Take Out Coffee');
const player1 = currentGame.player1;
const player2 = currentGame.player2;

//event listeners here
window.addEventListener('load', setUpBoard);

for (let i = 0; i < gameBoxes.length; i++) {
  const gameBox = gameBoxes[i];
  
  gameBox.addEventListener('click', function() {
    currentGame.addToken(i);
    console.log(currentGame);
    currentGame.switchPlayer();
    showPlayerTurn();
  });
}


//functions here
function setUpBoard() {
  currentGame.createBoard();
  showPlayerTurn();
}

function showPlayerTurn() {
  let playerToken =  '';
  console.log(currentGame.playerTurn, '-', player1.token)
  if (currentGame.playerTurn === player1.token) {
    playerToken = `<img class="player__1 player__token--smaller" src="./assets/icons8-bubble-tea-80.png" alt="Bubble tea token">`;
  } else {
    playerToken = `<img class="player__2 player__token--smaller" src="./assets/icons8-coffee-to-go-80.png" alt="Coffee token">`;
  }
  boardHeader.innerHTML = `<h1 class="board__title">It is ${playerToken}'s turn!</h1>`;
}

function renderBoard() {
  for (let i = 0; i < gameBoxes.length; i++) {
    
  }
}


console.log(currentGame, player1, player2)

