var intervalDraw, intervalGame;
var currentX, currentY;

var GameScreen = function(game) {
    var canvas = game.getCanvas();
};

GameScreen.prototype.show = function() {
    board = new Board(canvas);
    board.initializeBoard();
    board.startG();
    //currentShape = T.createTetromino();
    board.interval();
}