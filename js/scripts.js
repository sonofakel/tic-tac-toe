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

Game.prototype.switchPlayer = function() {
  if (this.currentPlayer.name === "Player1"){
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}

Game.prototype.mark = function() {
  if (this.currentPlayer.name === "Player1") {
    this.switchPlayer();
    return "x";
  } else {
    this.switchPlayer();
    return "o";
  }
}


var newGame = new Game();


// UI Logic -->
$(function(){

  $(".tic-tac-block").click(function(){
    $(this).text(newGame.mark());

  });
});
