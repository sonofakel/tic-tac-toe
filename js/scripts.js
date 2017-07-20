// Business Logic -->
function Player(name) {
  this.name = name;
}

function Game() {
  this.player1 = new Player("Player1");
  this.player2 = new Player("Player2");
  this.currentPlayer = this.player1;
  this.spaceMarked = false;
}

Game.prototype.switchPlayers = function() {
  if (this.currentPlayer.name === "Player1"){
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}

Game.prototype.mark = function() {
  if (this.currentPlayer.name === "Player1") {
    return "x";
    this.switchPlayers;
  } else {
    return "o";
  }
}

Game.prototype.marked = function() {
  if (this.spaceMarked === false) {
    this.spaceMarked = true;
  }
}


function Game() {
  this.player1 = new Player("Player1");
  this.player2 = new Player("Player2");
  this.currentPlayer = this.player1;
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
$(function(){

  $(".space1").click(function(){
    $(".space1").text(newGame.mark());
  });
});
