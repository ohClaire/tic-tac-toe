class Game {
  constructor(playerToken1, playerToken2) {
    this.board = this.createBoard();
    this.player1 = new Player(playerToken1);
    this.player2 = new Player(playerToken2);
    this.playerTurn = this.player1.token;
    this.starterPlayer = this.playerTurn;
    this.winner = '';
    this.winningMatch = [];
  }

  createBoard() {
    const board = [];
    
    for (let i = 0; i < 9; i++) {
      board.push('');
    }

    return board;
  }


  addTokenToBoard(index) {
    if (this.board[index] === '') {
      this.board[index] = this.playerTurn;
      this.switchPlayerTurn(this.playerTurn); 
      this.checkForWinner();
    } 
  }

  switchPlayerTurn(playerToken) {
    if (playerToken === this.player1.token) {
      this.playerTurn = this.player2.token;

    } else {
      this.playerTurn = this.player1.token;
    } 

    return this.playerTurn;
  } 

  updateWinner(index) {
    this.winner = this.board[index];
    this.givePlayerPoints();
  }
  
  checkForWinner() {
    if (this.detectThreeMatches(0, 1, 2)) {
      this.updateWinner(0);
      this.winningMatch = [0, 1, 2];
    } else if (this.detectThreeMatches(3, 4, 5)) {
      this.updateWinner(3);
      this.winningMatch = [3, 4, 5];
    } else if (this.detectThreeMatches(6, 7, 8)) {
      this.updateWinner(6);
      this.winningMatch = [6, 7, 8];
    } else if (this.detectThreeMatches(0, 3, 6)) {
      this.updateWinner(0);
      this.winningMatch = [0, 3, 6];
    } else if (this.detectThreeMatches(1, 4, 7)) {
      this.updateWinner(1);
      this.winningMatch = [1, 4, 7];
    } else if (this.detectThreeMatches(2, 5, 8)) {
      this.updateWinner(2);
      this.winningMatch = [2, 5, 8];
    } else if (this.detectThreeMatches(0, 4, 8)) {
      this.updateWinner(0);
      this.winningMatch = [0, 4, 8];
    } else if (this.detectThreeMatches(2, 4, 6)) {
      this.updateWinner(2);
      this.winningMatch = [2, 4, 6];
    }
  }

  detectThreeMatches(boxIndex1, boxIndex2, boxIndex3) { 
    if (this.board[boxIndex1] !== '' &&
      this.board[boxIndex1] === this.board[boxIndex2] && 
      this.board[boxIndex1] === this.board[boxIndex3]
    ) {

      return true;
    }
  }

  givePlayerPoints() {
    if (this.winner === this.player1.token) {
      this.player1.increaseWins();

    } else {
      this.player2.increaseWins();
    }
  }

  resetGame() {
    this.board = this.createBoard();
    this.starterPlayer = this.switchPlayerTurn(this.starterPlayer); 
    this.winner = '';
    this.winningMatch = [];
  }

}
