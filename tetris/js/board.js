var Board = function(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.isEndGame = false;
    this.tetromino = new Tetromino();
    this.nextTetromino = this.random();
    this.board = [];
    this.countLines = 000;
    this.score = 000;
    this.isPause = true;
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
    switch (id) {
        case 1:
            tetromino = new TTetromino(4, -1);
            break;
        case 2:
            tetromino = new JTetromino(4, -1);
            break;
        case 3:
            tetromino = new ZTetromino(4, -1);
            break;
        case 4:
            tetromino = new OTetromino(4, -1);
            break;
        case 5:
            tetromino = new STetromino(4, -1);
            break;
        case 6:
            tetromino = new ITetromino(3, -1);
            break;
        case 7:
            tetromino = new LTetromino(4, -1);
            break;
    };
    return tetromino;
};

Board.prototype.playGame = function() {
    this.intervalDraw = setInterval(this._drawBoard.bind(this), 30);
    this.intervalGame = setInterval(this._tick.bind(this), 500);
};

Board.prototype._stopGame = function() {
    clearInterval(this.intervalDraw);
    clearInterval(this.intervalGame);
};

Board.prototype.randomTetromino = function() {
    this.tetromino = this.nextTetromino;
    this.nextTetromino = this.random();
    currentTetromino = this.tetromino.form;
};

Board.prototype._drawBoard = function() {   
    this._drawGameField();
    this._drawNextTetrominoAndGameStatistics();
    this.tetromino.draw(currentTetromino);
};

Board.prototype._drawNextTetrominoAndGameStatistics = function() {
    this.context.fillStyle = "#000";
    this.context.fillRect(610, 70, 140, 100);
    if (this.nextTetromino.sideLength == 4) {
        this.nextTetromino.draw(this.nextTetromino.form, 12.5, 3);
    }
    else if (this.nextTetromino.sideLength == 2) {
        this.nextTetromino.draw(this.nextTetromino.form, 13.5, 3);    
    }
    else {
        this.nextTetromino.draw(this.nextTetromino.form, 13, 3);
    }
    
    this.context.font = "bold 48px Arial";
    //SCORE
    this.context.fillStyle = '#000';
    this.context.fillRect(620, 335, 100, 40);
    this.context.fillStyle = '#fff';
    this.context.fillText(this.score, 620, 375);
    
    //LINES
    this.context.fillStyle = '#000';
    this.context.fillRect(620, 410, 100, 40);
    this.context.fillStyle = '#fff';
    this.context.fillText(this.countLines, 620, 450);
};

Board.prototype.initializeBoard = function() {
    for (var y = 0; y < Board.ROWS; ++y) {
        this.board[y] = [];
        for (var x = 0; x < Board.COLS; ++x) {
            this.board[y][x] = 0;
        }
    }
};

Board.prototype._drawField = function() {
    indent = this._getIndentForFieldLeft();
    this.context.fillStyle = 'black';
    this.context.fillRect(indent, 0, Board.WIDTH_FIELD, Board.HEIGHT_FIELD);
};

Board.prototype._drawGameField = function() {
    this._drawField();

    for (var x = 0; x < Board.COLS; ++x) {
        for (var y = 0; y < Board.ROWS; ++y) {
            if (this.board[y][x]) {
                var type = this.board[y][x];
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
    if (this._checkOffset(1, 0, currentTetromino)) {
        Y = this.tetromino.getY();
        this.tetromino.setY(Y + 1);
    }
    else {
        this._fixShape();
        this._clearLine();
        if (this.isEndGame) {
            this._stopGame();
            return false;
        }
        this.randomTetromino();
    }
};

Board.prototype._fixShape = function() {
    Y = this.tetromino.getY();
    X = this.tetromino.getX();

    for (var y = 0; y < this.tetromino.sideLength; ++y) {
        for (var x = 0; x < this.tetromino.sideLength; ++x) {
            if ((!this.isEndGame) && currentTetromino[y][x]) {
                this.board[y + Y][x + X] = currentTetromino[y][x];
            }
        }
    }
};

Board.prototype._checkOffset = function(offsetY, offsetX, currentTetromino) {
    Y = this.tetromino.getY();
    X = this.tetromino.getX();
    offsetX = X + offsetX;
    offsetY = Y + offsetY;
    newCurrent = currentTetromino;

    for (var y = 0; y < this.tetromino.sideLength; ++y) {
        for (var x = 0; x < this.tetromino.sideLength; ++x) {
            if (newCurrent[y][x]) {
                var tetrominoCanMove = typeof this.board[y + offsetY] == 'undefined' || 
                    typeof this.board[y + offsetY][x + offsetX] == 'undefined' || 
                    this.board[y + offsetY][x + offsetX] || y + offsetY >= Board.ROWS || 
                    x + offsetX >= Board.COLS || x + offsetX < 0;
                if (tetrominoCanMove) {
                    if (offsetY == 0 && (offsetX == 4 || offsetX == 3)) {
                        this._endGame();
                        this._saveResult();
                    }
                    return false;
                }
            }
        }
    }
    return true;
};

Board.prototype._saveResult = function() {
    var playerName = prompt('Enter name', 'Name');
    if (playerName != null && this.countLines != 0) {
        var obj = {};
        if (localStorage["tetrisRecords"] != null) {
            obj = JSON.parse(localStorage["tetrisRecords"]);
        }
        obj[playerName] = this.score;
        localStorage["tetrisRecords"] = JSON.stringify(obj);
        console.log(localStorage["tetrisRecords"]);
    };
};

Board.prototype._endGame = function() {
    this.isEndGame = true;
    console.log('EndGame');
    this._drawField();
    indent = this._getIndentForFieldLeft();
    this.context.font = "100px Courier New";
    this.context.fillStyle = "#fff";
    this.context.fillText("GAME", indent + 20, 280);
    this.context.fillText("OVER", indent + 20, 375);
    
};

Board.prototype._clearLine = function() {
    var countDelLine = 0;
    for (var line = Board.ROWS - 1; line >= 0; --line) {
        var isLine = true;
        for (var column = 0; column < Board.COLS; ++column) {
            if (this.board[line][column] == 0) {
                isLine = false;
                break;
            }
        }
        if(isLine) {
            countDelLine++;
            for (var delLine = line; delLine > 0; --delLine) {
                for (var column = 0; column < Board.COLS; ++column) {
                    this.board[delLine][column] = this.board[delLine - 1][column];                  
                }
            }
            ++line;
        }
    }
    var scores = {
        0: 0,
        1: 100,
        2: 300,
        3: 700,
        4: 1500      
    }
    this.score += scores[countDelLine];
    this.countLines += countDelLine;
};

Board.prototype._printPause = function() {
    this._drawField();
    indent = this._getIndentForFieldLeft();
    this.context.font = "100px Courier New";
    this.context.fillStyle = "#fff";
    this.context.fillText("PAUSE", indent, 330);
};

Board.prototype.action = function(key) {
    switch(key) {
        case 'left':
            if (this._checkOffset(0, -1, currentTetromino) && (this.isPause))
            {
                X = this.tetromino.getX();
                this.tetromino.setX(X - 1);
                this._drawBoard();
            };
            break;
        case 'right':
            if (this._checkOffset(0, 1, currentTetromino) && (this.isPause))
            {
                X = this.tetromino.getX();
                this.tetromino.setX(X + 1);
                this._drawBoard();
            };
            break;
        case 'down':
            if (this._checkOffset(1, 0, currentTetromino) && (this.isPause)) {
                Y = this.tetromino.getY();
                this.tetromino.setY(Y + 1);
                this._drawBoard();
            };
            break;
        case 'rotate':
            if (this.isPause) {
                var tempTetromino = tetromino.rotate(currentTetromino);
                if (this._checkOffset(0, 0, tempTetromino)) {
                    currentTetromino = tempTetromino;
                    this._drawBoard();
                };
            };
            break;
        case 'menu':
            this._stopGame();
            this._drawField();
            this.isEndGame = true;
            game.start();
            break;
        case 'pause':
            if (!this.isEndGame) {
                console.log(!this.isEndGame);
                if (this.isPause) {
                    this.isPause = false;
                    this._stopGame();
                    this._printPause();
                } else {
                    this.isPause = true;
                    this.playGame();
                };
            }
            break;
    };
};