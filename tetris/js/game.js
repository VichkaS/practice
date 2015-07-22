var COLS = 10, ROWS = 20;
var board = [];
var isEndGame;
var intervalDraw;
var intervalGame;
var currentShape; 
var currentX, currentY;
var shapes = [
    [ 1, 1, 1, 0,
      0, 1, 0],
    [ 1, 1, 1, 0,
      0, 0, 1 ],
    [ 1, 1, 0, 0,
      0, 1, 1 ],
    [ 1, 1, 0, 0,
      1, 1 ],
    [ 0, 1, 1, 0,
      1, 1 ],
    [ 1, 1, 1, 1],
    [ 1, 1, 1, 0,
      1 ]
];

function newGame() {  
    initializationBoard();
    newShape();
    isEndGame = false;
    intervalDraw = setInterval( field, 30 );
    intervalGame = setInterval( tick, 500 );
}

function initializationBoard() {
    for (var y = 0; y < ROWS; ++y) {
        board[y] = [];
        for (var x = 0; x < COLS; ++x) {
            board[y][x] = 0;
        }
    }
}

function newShape() {
    var id = Math.floor(Math.random() * shapes.length); 
    var shape = shapes[id];
    currentShape = [];
    for (var y = 0; y < 4; ++y) {
        currentShape[y] = [];
        for (var x = 0; x < 4; ++x) {
            var i = 4 * y + x;
            if (typeof shape[i] != 'undefined' && shape[i]) {
                currentShape[y][x] = id + 1;
            }
            else {
                currentShape[y][x] = 0;
            }
        }
    }
    currentX = 4;
    currentY = 0;
}

function fixShape() {
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (currentShape[y][x]) {
                board[y + currentY][x + currentX] = currentShape[y][x];
            }
        }
    }
}

function tick() {
    if (checkOffset(1)) {
        ++currentY;
    }
    else {
        fixShape();
        if (isEndGame) {
            clearInterval(intervalGame);
            clearInterval(intervalDraw);
            menu();
            return false;
        }
        newShape();
    }
}

function checkOffset(offsetY) {
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
}