function GameEngine() {

  this.entities           = [];
  this.ctx                = null;
  this.canvasWidth        = null;
  this.canvasHeight       = null;    
  this.canvasHalfWidth    = null;
  this.canvasHalfHeight   = null;

}


GameEngine.prototype.init = function(ctx) {

  this.ctx = ctx;

  this.canvasWidth        = ctx.canvas.width;
  this.canvasHalfWidth    = ctx.canvas.width / 2;
  this.canvasHeight       = ctx.canvas.height;
  this.canvasHalfHeight   = ctx.canvas.height / 2;

}

GameEngine.prototype.start = function() {
  console.log("starting game");
  var that = this;
  (function gameLoop() {
    that.loop();
    requestAnimFrame(gameLoop, that.ctx.canvas);
  })();
}

GameEngine.prototype.loop = function() {
  this.update();
  this.draw();
}

GameEngine.prototype.addEntity = function(e) {
  this.entities.push(e);
}

GameEngine.prototype.draw = function(drawCallback) {
  this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

  this.ctx.save();
  this.ctx.translate(this.canvasHalfWidth, this.canvasHalfHeight);

  var cnt = this.entities.length;
  for(var i = 0; i < cnt; i++) {
    var entity = this.entities[i];
    if(!entity.removeFromCanvas)
      entity.draw(this.ctx);
    }

    if(drawCallback) {
      drawCallback(this);
  }
  this.ctx.restore();

}

GameEngine.prototype.update = function() {
  var cnt = this.entities.length;

  for(var i = cnt - 1; i >= 0; i--) {
    var entity = this.entities[i];

    if(entity.removeFromCanvas) {
      this.entities.splice(i,1);
    } else {
      entity.update();
    }
  }


}
