var GameScreen = function(game) {
    this.canvas = game.getCanvas();
    this._context = this.canvas.getContext('2d');
};

GameScreen.prototype.show = function() {
    var gScreen = new Image();
    var context = this._context;
    gScreen.src = 'backgroundField.png';
    gScreen.onload = function(){
        context.drawImage(gScreen, 0, 0);
    }
    
    board = new Board(this.canvas);
    board.initializeBoard();
    board.randomTetromino();
    board.playGame();
    
    document.body.onkeydown = function(e) {
        var keys = {
            37: 'left',
            39: 'right',
            40: 'down',
            38: 'rotate',
            27: 'menu',
            32: 'pause'
        };
        if (typeof keys[e.keyCode] != 'undefined') {
            board.action(keys[e.keyCode]);
        };
    };
};