
function Ship(game) {
  this.prototype.init(this, game, {x: 0, y: 0});

}

Ship.prototype.draw = function() {
  console.log("Ship::draw()");
}

Ship.prototype = new Entity();
Ship.prototype.constructor = Ship;


$(document).ready(function() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  var game = new Game();
  
  var ship = new Ship(game); 
  //game.game.addEntity(ship);

  game.init(ctx);
  game.start();
});
