var COLS = 10, ROWS = 20;
var WIDTH_FIELD = 300, HEIGHT_FIELD = 600;
var BLOCK_W = WIDTH_FIELD / COLS, BLOCK_H = HEIGHT_FIELD / ROWS;
var INDENT = (canvas.width - WIDTH_FIELD) / 2;

var currentShape;
var Board = function(canvas) {
    this.canvas = canvas;
    var context = canvas.getContext('2d');
    isEndGame = false;
    tetromino = new Tetromino();
    var board = [];
}

Board.prototype.random = function() {
    var id = Math.floor(Math.random() * (8 - 1) + 1);
    console.log(id);
    switch (id){
        case 1:
            T = new TTetromino(4, 0);
            return T;
        case 2:
            J = new JTetromino(4, 0);
            return J;
        case 3:
            Z = new ZTetromino(4, 0);
            return Z;
        case 4:
            O = new OTetromino(4, 0);
            return O;
        case 5:
            S = new STetromino(4, 0);
            return S;
        case 6:
            I = new ITetromino(3, 0);
            return I;
            return I;
        case 7:
            L = new LTetromino(4, 0);
            return L;
    } 
}

Board.prototype.interval = function() {
    this.intervalDraw = setInterval(this.drawBoard.bind(this), 30);
    this.intervalGame = setInterval(this.tick.bind(this), 500);
}

Board.prototype.intervalStop = function(T) {
    clearInterval(this.intervalDraw);
    clearInterval(this.intervalGame);
}

Board.prototype.randomTetromino = function() {
    tetromino = board.random();
}

Board.prototype.drawBoard = function() {   
    this._drawGameField();
    tetromino.draw();
};

Board.prototype.initializeBoard = function() {
    for (var y = 0; y < ROWS; ++y) {
        board[y] = [];
        for (var x = 0; x < COLS; ++x) {
            board[y][x] = 0;
        }
    }
};

Board.prototype._drawGameField = function() {
    context.fillStyle = "#000";
    context.fillRect(INDENT, 0, WIDTH_FIELD, HEIGHT_FIELD);
    
    context.strokeStyle = 'black';
    for (var x = 0; x < COLS; ++x) {
        for (var y = 0; y < ROWS; ++y) {
            if (board[y][x]) {
                var type = board[y][x];
                switch (type){
                    case 1:
                        var block = new Block(x, y);
                        block.drawBlockFirstType();
                        break;
                    case 2:
                        var block = new Block(x, y);
                        block.drawBlockSecondType();
                        break;
                    case 3:
                        var block = new Block(x, y);
                        block.drawBlockThirdType();
                        break;
                    case 4:
                        var block = new Block(x, y);
                        block.drawBlockFourthType();
                        break;
                } 
            }
        }
    }
};

Board.prototype.tick = function() {
    if (this._checkOffset(1, 0, currentShape)) {
        Y = tetromino.getY();
        tetromino.setY(Y +1);
    }
    else {
        this._fixShape();
        if (isEndGame) {
            this.intervalStop();
            return false;
        }
        //newShape();
        this.randomTetromino();
    }
};

Board.prototype._fixShape = function() {
    Y = tetromino.getY();
    X = tetromino.getX();
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (currentShape[y][x]) {
                board[y + Y][x + X] = currentShape[y][x];
            }
        }
    }
};

Board.prototype._checkOffset = function(offsetY, offsetX, currentShape) {
    Y = tetromino.getY();
    X = tetromino.getX();
    offsetX = X;
    offsetY = Y + offsetY;
    newCurrent = currentShape;

    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (newCurrent[y][x]) {
                if ( typeof board[y + offsetY] == 'undefined' || board[y + offsetY][x + offsetX] || y + offsetY >= ROWS ) {
                    if (offsetY == 1) {
                        isEndGame = true;
                    }
                    return false;
                }
            }
        }
    }
    return true;
};
