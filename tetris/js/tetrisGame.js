var TetrisGame = function(canvas){
    this.canvas = canvas;
};

TetrisGame.prototype.getCanvas = function() {
    return this.canvas;
};

TetrisGame.prototype.start = function() {
    this._activeScreen = new MenuScreen(this);  
    this._activeScreen.show();
};

TetrisGame.prototype.startGame = function() {
    this._activeScreen = new GameScreen(this);  
    this._activeScreen.show();
};
