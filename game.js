class Game {
  constructor(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.board = [];
    console.log(this.createBoard())
    console.log(this.placeToken(player2, 0));
    console.log(this.placeToken(player2, 1));
    console.log(this.placeToken(player2, 2));
    console.log(this.checkForWinner());
    console.log(this.winner)
    this.playerTurn = '';
    this.winner = '';
  }

  createBoard() {
    this.board = []; // this should reset my board
    for (let i = 0; i < 9; i++) {
      this.board.push('');
    }
  }

  placeToken(player, index) {
    // console.log(player, index)
    if (this.board[index] === '') {
      this.board[index] = player;
    } else {
      return 'Choose a different spot!';
    }
    return this.switchPlayer(player);
  }

  switchPlayer(player) {
    if (player === this.player1.token) {
      this.playerTurn = this.player2.token;
    } else {
      this.playerTurn = this.player1.token;
    } 
    return `It is ${this.playerTurn}'s turn!`
  } 
  
  checkForWinner() {
    console.log(this.board[0], this.board[1], this.board[2])
   
    if (this.checkMatchingBoxes(0, 1, 2)) {
      this.winner = this.board[0]
    } else if (this.checkMatchingBoxes(3, 4, 5)) {
      this.winner = this.board[3]
    } else if (checkMatchingBoxes(6, 7, 8)) {
      this.winner = this.board[6];
    } else if (checkMatchingBoxes(0, 3, 6)) {
      this.winner = this.board[0];
    } else if (checkMatchingBoxes(1, 4, 7)) {
      this.winner = this.board[1];
    } else if (checkMatchingBoxes(2, 5, 8)) {
      this.winner = this.board[2];
    } else if (checkMatchingBoxes(0, 4, 8)) {
      this.winner = this.board[0];
    } else if (checkMatchingBoxes(2, 4, 6)) {
      this.winner = this.board[2]
    }
    this.declareWinner(this.winner);
    this.createBoard();
  }

  checkMatchingBoxes(boxIndex1, boxIndex2, boxIndex3) { 
    if (
      this.board[boxIndex1] === this.board[boxIndex2] && 
      this.board[boxIndex1] === this.board[boxIndex3]
    ) {
      return true
    }
  }
  
  getPlayer(token) {
    if (token === 'X') {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  declareWinner(token) {
    const player = this.getPlayer(token)
    player.wins += 1; // I need to link my player to their instance instead of the string!!!! 
    console.log(player)
    return `${this.winner} has won this game!`; 
  }

}
