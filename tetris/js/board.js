var Board = function(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.isEndGame = false;
    this.tetromino = new Tetromino();
    this.board = [];
}

Board.COLS = 10;
Board.ROWS = 20;
Board.WIDTH_FIELD = 301;
Board.HEIGHT_FIELD = 600;

Board.prototype._getIndentForFieldLeft = function() { 
    return (this.canvas.width - Board.WIDTH_FIELD) / 2;
};

Board.prototype.random = function() {
    var id = Math.floor(Math.random() * (8 - 1) + 1);
    console.log(id);
    switch (id){
        case 1:
            tetromino = new TTetromino(4, 0);
            break;
        case 2:
            tetromino = new JTetromino(4, 0);
            break;
        case 3:
            tetromino = new ZTetromino(4, 0);
            break;
        case 4:
            tetromino = new OTetromino(4, 0);
            break;
        case 5:
            tetromino = new STetromino(4, 0);
            break;
        case 6:
            tetromino = new ITetromino(3, -1);
            break;
        case 7:
            tetromino = new LTetromino(4, 0);
            break;
    }
    return tetromino;
}

Board.prototype.interval = function() {
    this.intervalDraw = setInterval(this.drawBoard.bind(this), 30);
    this.intervalGame = setInterval(this._tick.bind(this), 500);
}

Board.prototype.intervalStop = function(T) {
    clearInterval(this.intervalDraw);
    clearInterval(this.intervalGame);
}

Board.prototype.randomTetromino = function() {
    tetromino = board.random();
    currentShape = tetromino.currentShape;
}

Board.prototype.drawBoard = function() {   
    this._drawGameField();
    tetromino.draw();
};

Board.prototype.initializeBoard = function() {
    for (var y = 0; y < Board.ROWS; ++y) {
        board[y] = [];
        for (var x = 0; x < Board.COLS; ++x) {
            board[y][x] = 0;
        }
    }
};

Board.prototype._drawGameField = function() {
    indent = this._getIndentForFieldLeft();
    context.fillStyle = "#000";
    context.fillRect(indent, 0, Board.WIDTH_FIELD, Board.HEIGHT_FIELD);
    
    context.strokeStyle = 'black';
    for (var x = 0; x < Board.COLS; ++x) {
        for (var y = 0; y < Board.ROWS; ++y) {
            if (board[y][x]) {
                var type = board[y][x];
                switch (type){
                    case Block.TYPES.BLUE_SQUARE_AND_SMALL_WHITE_SQUARE:
                        var block = new Block(x, y);
                        block.drawBlockFirstType();
                        break;
                    case Block.TYPES.BLUE_SQUARE:
                        var block = new Block(x, y);
                        block.drawBlockSecondType();
                        break;
                    case Block.TYPES.RED_SQUARE:
                        var block = new Block(x, y);
                        block.drawBlockThirdType();
                        break;
                    case Block.TYPES.BLUE_SQUARE_AND_BIG_WHITE_SQUARE:
                        var block = new Block(x, y);
                        block.drawBlockFourthType();
                        break;
                } 
            }
        }
    }
};

Board.prototype._tick = function() {
    if (this._checkOffset(1, 0, currentShape)) {
        Y = tetromino.getY();
        tetromino.setY(Y + 1);
    }
    else {
        this._fixShape();
        if (this.isEndGame) {
            this.intervalStop();
            return false;
        }
        this.randomTetromino();
    }
};

Board.prototype._fixShape = function() {
    Y = tetromino.getY();
    X = tetromino.getX();

    for (var y = 0; y < tetromino.sideLength; ++y) {
        for (var x = 0; x < tetromino.sideLength; ++x) {
            if (currentShape[y][x]) {
                board[y + Y][x + X] = currentShape[y][x];
            }
        }
    }
};

Board.prototype._checkOffset = function(offsetY, offsetX, currentShape) {
    Y = tetromino.getY();
    X = tetromino.getX();
    offsetX = X + offsetX;
    offsetY = Y + offsetY;
    newCurrent = currentShape;

    for (var y = 0; y < tetromino.sideLength; ++y) {
        for (var x = 0; x < tetromino.sideLength; ++x) {
            if (newCurrent[y][x]) {
                if ( typeof board[y + offsetY] == 'undefined' || typeof board[y + offsetY][x + offsetX] == 'undefined' 
                    || board[y + offsetY][x + offsetX] || y + offsetY >= Board.ROWS + 2 
                    || x + offsetX >= Board.COLS || x + offsetX < 0) {
                    if (offsetY == 1) {
                        this.isEndGame = true;
                    }
                    return false;
                }
            }
        }
    }
    return true;
};

Board.prototype.keyPress = function(key) {
    switch(key) {
        case 'left':
            if (this._checkOffset(0, -1, currentShape))
            {
                X = tetromino.getX();
                tetromino.setX(X - 1);
            };
            break;
        case 'right':
            if (this._checkOffset(0, 1, currentShape))
            {
                X = tetromino.getX();
                tetromino.setX(X + 1);
            };
            break;
        case 'down':
            if (this._checkOffset(1, 0, currentShape)) {
                Y = tetromino.getY();
                tetromino.setY(Y + 1);
            };
            break;
        case 'rotate':
            var rotated = tetromino.rotate(currentShape);
            if (this._checkOffset(0, 0, rotated)) {
                currentShape = rotated;
            };
            break;
    }
};
