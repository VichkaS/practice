var Tetromino = function(){
    this.x = 0;
    this.y = 0;
};

Tetromino.prototype.draw = function(tetromino, X, Y) {
    X = X || this.x;
    Y = Y || this.y;
    sideLength = tetromino.length;    
    for (var y = 0; y < sideLength; ++y) {
        for (var x = 0; x < sideLength; ++x) {
            if (tetromino[y][x]) {               
                this.drawBlok(X + x, Y + y);
            }
        }
    }  
};

Tetromino.prototype.rotate = function(tetromino) {
    var newTetromino = [];
    sideLength = tetromino.length;
    for (var y = 0; y < sideLength; ++y) {
        newTetromino[y] = [];
        for (var x = 0; x < sideLength; ++x) {
            newTetromino[y][x] = tetromino[(sideLength - 1) - x][y];                     
        }
    }
    return newTetromino;
}

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
    this.form = [[0, 1, 0],
                 [1, 1, 1],
                 [0, 0, 0]];
    this.sideLength = 3;
}; 

TTetromino.prototype = Object.create(Tetromino.prototype);

TTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockFirstType();
};

var JTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.form = [[2, 0, 0],
                 [2, 2, 2],
                 [0, 0, 0]];
    this.sideLength = 3;
}; 

JTetromino.prototype = Object.create(Tetromino.prototype);

JTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockSecondType();
};

var ZTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.form = [[3, 3, 0],
                 [0, 3, 3],
                 [0, 0, 0]];
    this.sideLength = 3;
}; 

ZTetromino.prototype = Object.create(Tetromino.prototype);

ZTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockThirdType();
};

var OTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.form = [[4, 4],
                 [4, 4]];
    this.sideLength = 2;
}; 

OTetromino.prototype = Object.create(Tetromino.prototype);

OTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockFourthType();
};

var STetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.form = [[0, 2, 2],
                 [2, 2, 0],
                 [0, 0, 0]];
    this.sideLength = 3;
}; 

STetromino.prototype = Object.create(Tetromino.prototype);

STetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockSecondType();
};

var ITetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.form = [[1, 1, 1, 1],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]];
    this.sideLength = 4;
}; 

ITetromino.prototype = Object.create(Tetromino.prototype);

ITetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockFirstType();
};

var LTetromino = function(x, y){
    this.x = x;
    this.y = y;
    this.form = [[0, 0, 3],
                 [3, 3, 3],
                 [0, 0, 0]];
    this.sideLength = 3;
}; 

LTetromino.prototype = Object.create(Tetromino.prototype);

LTetromino.prototype.drawBlok = function(x, y) {
    var block = new Block(x, y);
    block.drawBlockThirdType();
};