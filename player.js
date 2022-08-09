let id = 0;

class Player {
  constructor(token) {
    this.id = id++;
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.wins += 1;
  }
}
