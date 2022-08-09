let id = 1;

class Player {
  constructor(token) {
    this.id = id++;
    this.token = token;
    this.wins = 0;
    this.retrievePoints();
  }

  increaseWins() {
    this.wins += 1;
    this.storePoints();
  }

  storePoints() {
    const stringifiedPlayerPoints = JSON.stringify(this.wins);
    const stringifyId = JSON.stringify(this.id)
    localStorage.setItem(stringifyId, stringifiedPlayerPoints);
  }

  retrievePoints() {
    const retrievedPoints = localStorage.getItem(JSON.stringify(this.id));
    
    if (retrievedPoints === null) {
      this.wins = 0;
    } else {
      const parsedPoints = JSON.parse(retrievedPoints);
      this.wins = parsedPoints;
    }
  }
}
