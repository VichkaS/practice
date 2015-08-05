var GameScreen = function(game) {
    this.canvas = game.getCanvas();
};

GameScreen.prototype.show = function() {
    board = new Board(canvas);
    board.initializeBoard();
    board.randomTetromino();
    board.interval();
    
    document.body.onkeydown = function(e) {
    var keys = {
        37: 'left',
        39: 'right'
    };
    if (typeof keys[e.keyCode] != 'undefined') {
        board.keyPress(keys[e.keyCode]);
        board.drawBoard();
    }
};
}