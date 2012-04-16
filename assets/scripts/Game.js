
function Game() {
  GameEngine.call(this);
  this.showOutlines = true;
  this.lives = 10;
  this.score = 0;
}
Game.prototype = new GameEngine();
Game.prototype.constructor = Game;


Game.prototype.start = function() {
  GameEngine.prototype.start.call(this);
}

Game.prototype.draw = function() {
  GameEngine.prototype.draw.call(this, function(game) {});
}
