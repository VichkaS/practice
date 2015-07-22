var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var WIDTH_FIELD = 300, HEIGHT_FIELD = 600;
var BLOCK_W = WIDTH_FIELD / COLS, BLOCK_H = HEIGHT_FIELD / ROWS;
var INDENT = (canvas.width - WIDTH_FIELD) / 2;

function drawBlock(x, y, shape) {
    switch (shape){
        case 0:
            context.fillStyle = '#1e2fdf';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            //верхний левый квадрат
            context.fillRect(((BLOCK_W * x) + 1) + INDENT, BLOCK_H * y, (BLOCK_W / 4) - 1 , (BLOCK_H / 4) - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            //квадрат по центру
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 2 - 1), (BLOCK_H - (BLOCK_W / 5) * 2 - 1));
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            break;
        case 1: 
            context.fillStyle = '#1e2fdf';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            //верхний левый квадрат
            context.fillRect(((BLOCK_W * x) + 1) + INDENT, BLOCK_H * y, (BLOCK_W / 4) - 1 , (BLOCK_H / 4) - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            // уголок в центре
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 3 - 1), (BLOCK_H - (BLOCK_W / 5) * 3 - 1));
            context.fillStyle = '#1e2fdf';
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 2.5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 2.5), 
                             (BLOCK_W - (BLOCK_W / 2.5) - 1), (BLOCK_H - (BLOCK_W / 2.5) - 1));
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            break;
    case 2:                
            context.fillStyle = '#dd0d00';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            context.fillRect(((BLOCK_W * x) + 1) + INDENT, BLOCK_H * y, (BLOCK_W / 4) - 1 , (BLOCK_H / 4) - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            // уголок в центре
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 3 - 1), (BLOCK_H - (BLOCK_W / 5) * 3 - 1));
            context.fillStyle = '#dd0d00';
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 2.5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 2.5), 
                             (BLOCK_W - (BLOCK_W / 2.5) - 1), (BLOCK_H - (BLOCK_W / 2.5) - 1));
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            break;
    case 3:
            context.fillStyle = '#1e2fdf';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 2 - 1), (BLOCK_H - (BLOCK_W / 5) * 2 - 1));
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            break;
    case 4:
            context.fillStyle = '#1e2fdf';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            context.fillRect(((BLOCK_W * x) + 1) + INDENT, BLOCK_H * y, (BLOCK_W / 4) - 1 , (BLOCK_H / 4) - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            // уголок в центре
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 3 - 1), (BLOCK_H - (BLOCK_W / 5) * 3 - 1));
            context.fillStyle = '#1e2fdf';
            context.fillRect( (BLOCK_W * x) + (BLOCK_W / 2.5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 2.5), 
                             (BLOCK_W - (BLOCK_W / 2.5) - 1), (BLOCK_H - (BLOCK_W / 2.5) - 1));
            context.strokeRect( BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1 );
            break;
    case 5:
            context.fillStyle = '#1e2fdf';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            context.fillRect(((BLOCK_W * x) + 1) + INDENT, BLOCK_H * y, (BLOCK_W / 4) - 1 , (BLOCK_H / 4) - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 2 - 1), (BLOCK_H - (BLOCK_W / 5) * 2 - 1));
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            break;
    case 6: 
            context.fillStyle = '#dd0d00';
            context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            context.fillStyle = '#FFFFFF';
            context.fillRect(((BLOCK_W * x) + 1) + INDENT, BLOCK_H * y, (BLOCK_W / 4) - 1 , (BLOCK_H / 4) - 1);
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            // уголок в центре
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                             (BLOCK_W - (BLOCK_W / 5) * 3 - 1), (BLOCK_H - (BLOCK_W / 5) * 3 - 1));
            context.fillStyle = '#dd0d00';
            context.fillRect((BLOCK_W * x) + (BLOCK_W / 2.5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 2.5), 
                             (BLOCK_W - (BLOCK_W / 2.5) - 1), (BLOCK_H - (BLOCK_W / 2.5) - 1));
            context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
            break;
    }
}

function drawGameField() { 
    context.fillStyle = "#000";
    context.fillRect(INDENT, 0, WIDTH_FIELD, HEIGHT_FIELD);
    
    context.strokeStyle = 'black';
    for (var x = 0; x < COLS; ++x) {
        for (var y = 0; y < ROWS; ++y) {
            if (board[y][x]) {
                var shape = board[y][x] - 1 ;
                drawBlock(x, y, shape);
            }
        }
    }
}

function field() {
    drawGameField();
    //moving shape
    context.strokeStyle = 'black';
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (currentShape[y][x]) {
                var shape = currentShape[y][x] - 1 ;
                drawBlock(currentX + x, currentY + y, shape);
            }
        }
    }
}