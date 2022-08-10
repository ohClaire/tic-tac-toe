const bubbleTeaToken = `<img class="player__1 player__token--smaller" src="./assets/icons8-bubble-tea-80.png" alt="Bubble tea token">`;
const coffeeCupToken = `<img class="player__2 player__token--smaller" src="./assets/icons8-coffee-to-go-80.png" alt="Coffee token">`;
const currentGame = new Game('Bubble Tea', 'Take Out Coffee');
const player1 = currentGame.player1;
const player2 = currentGame.player2;

const boardBanner = document.querySelector('#board__banner');
const gameBoxes = document.querySelectorAll('.board__game--box');
const player1Score = document.querySelector('.player1__score');
const player2Score = document.querySelector('.player2__score');

window.addEventListener('load', renderChanges);

for (let i = 0; i < gameBoxes.length; i++) {
  const gameBox = gameBoxes[i];
  
  gameBox.addEventListener('click', function() {
    if (currentGame.winner === '' && currentGame.board.includes('')) { 
      currentGame.addTokenToBoard(i); 

      renderChanges();
      renderGameReset();  
    }  
  });

}

function getTokenImage(playerToken) {  
  if (playerToken === player1.token) {
    return bubbleTeaToken;
  } else if (playerToken === player2.token) {
    return coffeeCupToken;
  } else {
    return '';
  }
}

function renderCenterBanner() {
  if (currentGame.winner) {
    boardBanner.innerHTML = `<h1 class="board__title">${getTokenImage(currentGame.winner)} wins!</h1>`;
  } else if (!currentGame.board.includes('')) {
    boardBanner.innerHTML = `<h1 class="board__title">It's a draw!</h1>`;
  } else {
    boardBanner.innerHTML = `<h1 class="board__title">It is ${getTokenImage(currentGame.playerTurn)}'s turn!</h1>`;
  }
}

function renderScore() {
  player1Score.innerText = `${player1.wins} wins`;
  player2Score.innerText = `${player2.wins} wins`;
}

function renderGame() {
  for (let i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].innerHTML = getTokenImage(currentGame.board[i]);
    setBoxTitle(gameBoxes[i], i);
    renderWinningMatch(gameBoxes[i], i)
  }
}

function renderChanges() {
  renderCenterBanner();
  renderGame();
  renderScore();
}

function renderGameReset() {
  if (currentGame.winner || !currentGame.board.includes('')) {
    setTimeout(function() {
      currentGame.resetGame();
      renderChanges();
    }, 2000);
  }
}

function renderWinningMatch(box, index) {
  if (currentGame.winningMatch.includes(index)) {
    box.classList.add('box--highlight');
  } else {
    box.classList.remove('box--highlight');
  }
}

function setBoxTitle(box, index) {
  if (currentGame.board[index] === '') {
    box.setAttribute('title', 'empty-box');
  } else {
    box.setAttribute('title', currentGame.board[index]);
  }
}
