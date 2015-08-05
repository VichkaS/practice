var Tetromino = function(){
    this.x = 0;
    this.y = 0;
};

Tetromino.prototype.draw = function() {
    context.strokeStyle = 'black';
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (currentShape[y][x]) {               
                this.drawBlok(this.x + x, this.y + y);
            }
        }
    }  
};

Tetromino.prototype.getY = function() {
    return this.y;
}

Tetromino.prototype.setY = function(newY) {
    this.y = newY;
}

Tetromino.prototype.getX = function() {
    return this.x;
}

Tetromino.prototype.setX = function(newX) {
    this.x = newX;
}
    
var TTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[0, 1, 0, 0],
                         [1, 1, 1, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]];
}; 

TTetromino.prototype = Object.create(Tetromino.prototype);

TTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockFirstType();
};

var JTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[2, 2, 2, 0],
                         [0, 0, 2, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]]; 
}; 

JTetromino.prototype = Object.create(Tetromino.prototype);

JTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockSecondType();
};

var ZTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[3, 3, 0, 0],
                         [0, 3, 3, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]];
}; 

ZTetromino.prototype = Object.create(Tetromino.prototype);

ZTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockThirdType();
};

var OTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[4, 4, 0, 0],
                         [4, 4, 0, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]];
}; 

OTetromino.prototype = Object.create(Tetromino.prototype);

OTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockFourthType();
};

var STetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[0, 2, 2, 0],
                         [2, 2, 0, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]];
}; 

STetromino.prototype = Object.create(Tetromino.prototype);

STetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockSecondType();
};

var ITetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[1, 1, 1, 1],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]];
}; 

ITetromino.prototype = Object.create(Tetromino.prototype);

ITetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockFirstType();
};

var LTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.currentShape = [[3, 3, 3, 0],
                         [3, 0, 0, 0],
                         [0, 0, 0, 0],
                         [0, 0, 0, 0]];
}; 

LTetromino.prototype = Object.create(Tetromino.prototype);

LTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockThirdType();
};