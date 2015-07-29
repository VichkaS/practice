var COLS = 10, ROWS = 20;
var WIDTH_FIELD = 300, HEIGHT_FIELD = 600;
var BLOCK_W = WIDTH_FIELD / COLS, BLOCK_H = HEIGHT_FIELD / ROWS;
var INDENT = (canvas.width - WIDTH_FIELD) / 2;

var currentShape;
var Board = function(canvas) {
    this.canvas = canvas;
    var context = canvas.getContext('2d');
    currentX = 4,
    currentY = 0;
    isEndGame = false;
    var board = [];
}

Board.prototype.random = function() {
    var id = Math.floor(Math.random() * (8 - 1) + 1);
    console.log(id);
    switch (id){
        case 1:
            T = new TTetromino();
            return T;
        case 2:
            J = new JTetromino();
            return J;
        case 3:
            Z = new ZTetromino();
            return Z;
        case 4:
            O = new OTetromino();
            return O;
        case 5:
            S = new STetromino();
            return S;
        case 6:
            I = new ITetromino();
            return I;
        case 7:
            L = new LTetromino();
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

Board.prototype.startG = function() {
    T = board.random();
}

Board.prototype.drawBoard = function() {   
    this._drawGameField();
    //moving shape
    T.draw(); 
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
                console.log(type);
                switch (type){
                    case 1:
                        var block = new Block(x, y);
                        block.drawBlockTypeOne();
                        break;
                    case 2:
                        var block = new Block(x, y);
                        block.drawBlockTypeTwo();
                        break;
                    case 3:
                        var block = new Block(x, y);
                        block.drawBlockTypeThree();
                        break;
                    case 4:
                        var block = new Block(x, y);
                        block.drawBlockTypeFour();
                        break;
                } 
            }
        }
    }
};

Board.prototype.tick = function() {
    if (this._checkOffset(1, 0, currentShape)) {
        ++currentY;
    }
    else {
        this._fixShape();
        if (isEndGame) {
            this.intervalStop();
            return false;
        }
        //newShape();
        T = board.random();
        currentY = 0;
        currentX = 4;
    }
};

Board.prototype._fixShape = function() {
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (currentShape[y][x]) {
                board[y + currentY][x + currentX] = currentShape[y][x];
            }
        }
    }
};

Board.prototype._checkOffset = function(offsetY, offsetX, currentShape) {
    offsetX = currentX;
    offsetY = currentY + offsetY;
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
