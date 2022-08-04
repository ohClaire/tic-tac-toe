class Game {
  constructor(playerToken1, playerToken2) {
    this.player1 = new Player(playerToken1);
    this.player2 = new Player(playerToken2);
    this.board = [];
    this.playerTurn = this.player1;
    this.winner = '';
    console.log(this.createBoard())
    console.log(this.placeToken(playerToken1, 0), this.switchPlayer(playerToken2));
    console.log(this.placeToken(playerToken2, 1));
    console.log(this.placeToken(playerToken1, 2));
    console.log(this.placeToken(playerToken1, 3));
    console.log(this.placeToken(playerToken2, 4));
    console.log(this.placeToken(playerToken2, 5));
    console.log(this.placeToken(playerToken2, 6));
    console.log(this.placeToken(playerToken1, 7));
    console.log(this.placeToken(playerToken1, 8));
    console.log(this.checkForWinner());
    // console.log(this.checkForDraw());
    // console.log(this.declareWinner(), this.winner)
    console.log(this.declareMatch())
    console.log(this.board)
  }

  createBoard() {
    this.board = []; // reset board after a time with setTimeout()
    for (let i = 0; i < 9; i++) {
      this.board.push('');
    }
  }

  placeToken(playerToken, index) {
    if (this.board[index] === '') {
      this.board[index] = playerToken;
    } else {
      return 'Choose a different spot!';
    }
    // return this.switchPlayer(player);
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
    let isThereWinner = false; //after the whole board is checked, return if a winner is found
    // console.log('check winner', this.board[0])
    if (this.detectThreeMatches(0, 1, 2)) {
      this.winner = this.board[0];
      isThereWinner = true;
    } else if (this.detectThreeMatches(3, 4, 5)) {
      this.winner = this.board[3];
      isThereWinner = true;
    } else if (this.detectThreeMatches(6, 7, 8)) {
      this.winner = this.board[6];
      isThereWinner = true;
    } else if (this.detectThreeMatches(0, 3, 6)) {
      this.winner = this.board[0];
      isThereWinner = true;
    } else if (this.detectThreeMatches(1, 4, 7)) {
      this.winner = this.board[1];
      isThereWinner = true;
    } else if (this.detectThreeMatches(2, 5, 8)) {
      this.winner = this.board[2];
      isThereWinner = true;
    } else if (this.detectThreeMatches(0, 4, 8)) {
      this.winner = this.board[0];
      isThereWinner = true;
    } else if (this.detectThreeMatches(2, 4, 6)) {
      this.winner = this.board[2];
      isThereWinner = true;
    }
    // this.declareWinner(this.winner);
    // createBoard()
    console.log(isThereWinner);
    return isThereWinner;
  }

  detectThreeMatches(boxIndex1, boxIndex2, boxIndex3) { 
    if (this.board[boxIndex1] !== '' &&
      this.board[boxIndex1] === this.board[boxIndex2] && 
      this.board[boxIndex1] === this.board[boxIndex3]
    ) {
      // console.log('this is the winner!')
      return true;
    }
  }
  
  getPlayer(playerToken) {
    if (playerToken === 'X') {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  givePlayerWin(playerToken) {
    const player = this.getPlayer(playerToken);
    player.wins += 1; 
  }


  declareMatch() {
    const isThereWinner = this.checkForWinner();

    if (!isThereWinner && !this.board.includes('')) { //if there is NOT a winner and there are no empty strings in the board
      return 'You\'re evenly matched!'
    } 
    
    return `${this.winner} has won this game!`; 
  }

}
