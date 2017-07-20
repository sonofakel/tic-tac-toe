// Business Logic -->
function Player(name) {
  this.name = name;
}

Player.prototype.mark = function() {
  if (this.name === "Player 1") {
    return "x";
  } else {
    return "o"
  }
}



Game.prototype.marked = function() {
  if (this.spaceMarked === false) {
    this.spaceMarked = true;
  } else {
    this.spaceMarked= false;
  }
}

function Board() {
  this.x = 1;
  this.y = 2;
}


function Game() {
  this.player1 = new Player("Player1");
  this.player2 = new Player("Player2");
  this.currentPlayer = this.Player1;
  this.board =
  this.spaceMarked = false;
}

Game.prototype.switchPlayers = function() {
  if (this.currentPlayer === this.Player1){
    this.currentPlayer = this.Player2;
  } else {
  this.currentPlayer = this.Player1;
  }
}

var newGame = new Game();


// UI Logic -->
