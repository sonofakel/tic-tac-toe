// Business Logic -->


function Player(name) {
  this.name = name;
  score = []
}

function Board() {
this.position = [1,2,3,4,5,6,7,8,9]
this.class = [".space1", ".space2", ".space3", ".space4", ".space5", ".space6", ".space7", ".space8", ".space9"]
}

function Game() {
  this.player1 = new Player("Player1");
  this.player2 = new Player("Player2");
  this.currentPlayer = this.player1;
  this.winningLines = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7]]
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
