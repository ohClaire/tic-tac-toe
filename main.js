//query selectors here



//global variables here
const playGame = new Game('X', 'O');

//event listeners here
window.addEventListener('load', createPlayer);


//functions here
function createPlayer(token) {
  return new Player(token);
}


console.log(playGame)

