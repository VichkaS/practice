var COLS = 10, ROWS = 20;
var WIDTH_FIELD = 300, HEIGHT_FIELD = 600;
var BLOCK_W = WIDTH_FIELD / COLS, BLOCK_H = HEIGHT_FIELD / ROWS;
var INDENT = (canvas.width - WIDTH_FIELD) / 2;

var Tetromino = function(){

};

Tetromino.prototype.draw = function() {
    context.strokeStyle = 'black';
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (currentShape[y][x]) {               
                this.drawBlok(currentX + x, currentY + y);
            }
        }
    }  
};

Tetromino.prototype.createTetromino = function(tetromino, id) {  
    currentShape = [];    
    for (var y = 0; y < 4; ++y) {
        currentShape[y] = [];
        for (var x = 0; x < 4; ++x) {
            var i = 4 * y + x;
            if (typeof tetromino[i] != 'undefined' && tetromino[i]) {
                currentShape[y][x] = id;
            }
            else {
                currentShape[y][x] = 0;
            }
        }
    }
    return currentShape;
}

var TTetromino = function(){
    tetromino = [0, 1, 0, 0,
                 1, 1, 1];
    type = 1;
    currentShape = this.createTetromino(tetromino, type);
}; 

TTetromino.prototype = Object.create(Tetromino.prototype);

TTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeOne();
};

var JTetromino = function(){
    tetromino = [1, 1, 1, 0,
                 0, 0, 1];
    type = 2;
    currentShape = this.createTetromino(tetromino, type);
}; 

JTetromino.prototype = Object.create(Tetromino.prototype);

JTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeTwo();
};

var ZTetromino = function(){
    tetromino = [1, 1, 0, 0,
                 0, 1, 1];
    type = 3;
    currentShape = this.createTetromino(tetromino, type);
}; 

ZTetromino.prototype = Object.create(Tetromino.prototype);

ZTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeThree();
};

var OTetromino = function(){
    tetromino = [1, 1, 0, 0,
                 1, 1];
    type = 4;
    currentShape = this.createTetromino(tetromino, type);
}; 

OTetromino.prototype = Object.create(Tetromino.prototype);

OTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeFour();
};

var STetromino = function(){
    tetromino = [0, 1, 1, 0,
                 1, 1];
    type = 2;
    currentShape = this.createTetromino(tetromino, type);
}; 

STetromino.prototype = Object.create(Tetromino.prototype);

STetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeTwo();
};

var ITetromino = function(){
    tetromino = [1, 1, 1, 1];
    type = 1;
    currentShape = this.createTetromino(tetromino, type);
}; 

ITetromino.prototype = Object.create(Tetromino.prototype);

ITetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeOne();
};

var LTetromino = function(){
    tetromino = [1, 1, 1, 0,
                 1];
    type = 3;
    currentShape = this.createTetromino(tetromino, type);
}; 

LTetromino.prototype = Object.create(Tetromino.prototype);

LTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockTypeThree();
};