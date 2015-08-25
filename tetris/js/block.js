var Block = function(x, y) {
    this.canvas = game.getCanvas();
    this.context = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
}

Block.BLOCK_W = 30;
Block.BLOCK_H = 30;
Block.INDENT = 250;


Block.TYPES = {
    BLUE_SQUARE_AND_SMALL_WHITE_SQUARE: 1,
    BLUE_SQUARE: 2,
    RED_SQUARE: 3,
    BLUE_SQUARE_AND_BIG_WHITE_SQUARE: 4,
};


Block.prototype.drawBlockFirstType = function() {
    x = this.x;
    y = this.y;
    BLOCK_W = Block.BLOCK_W;
    BLOCK_H = Block.BLOCK_H;
    INDENT = Block.INDENT;
    var context = this.context;
    
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
}

Block.prototype.drawBlockSecondType = function() {
    x = this.x;
    y = this.y;
    BLOCK_W = Block.BLOCK_W;
    BLOCK_H = Block.BLOCK_H;
    INDENT = Block.INDENT;
    var context = this.context;
    
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
}

Block.prototype.drawBlockThirdType = function() {
    x = this.x;
    y = this.y;
    BLOCK_W = Block.BLOCK_W;
    BLOCK_H = Block.BLOCK_H;
    INDENT = Block.INDENT;
    var context = this.context;
    
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
}

Block.prototype.drawBlockFourthType = function() {
    x = this.x;
    y = this.y;
    
    BLOCK_W = Block.BLOCK_W;
    BLOCK_H = Block.BLOCK_H;
    INDENT = Block.INDENT;
    var context = this.context;
    
    context.fillStyle = '#1e2fdf';
    context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
    context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
    context.fillStyle = '#FFFFFF';
    context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                     (BLOCK_W - (BLOCK_W / 5) * 2 - 1), (BLOCK_H - (BLOCK_W / 5) * 2 - 1));
    context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
}