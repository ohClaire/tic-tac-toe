class Computer {
constructor() {

}

addToken() {
  if (!this.isHuman) {
    const min = Math.ceil(0);
    const max = Math.floor(9);

    return Math.floor(Math.random() * (max - min) + min);
  }
}

}