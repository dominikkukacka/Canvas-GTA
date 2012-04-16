function Entity(ops) {
  this.x = ops.x;
  this.y = ops.y;

  this.removeFromCanvas = false;
}

Entity.prototype.update = function() {}
Entity.prototype.draw = function(ctx) {}

Entity.prototype.drawSpriteCentered = function(ctx) {
  var x = this.x - this.sprite.width/2;
  var y = this.y - this.sprite.height/2;
  ctx.drawImage(this.sprite, x, y);
}

