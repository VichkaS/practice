var Block = function(x, y) {
    this.x = x;
    this.y = y;
}

Block.prototype.drawBlockTypeOne = function() {
    x = this.x;
    y = this.y;
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

Block.prototype.drawBlockTypeTwo = function() {
    x = this.x;
    y = this.y;
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

Block.prototype.drawBlockTypeThree = function() {
    x = this.x;
    y = this.y;
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

Block.prototype.drawBlockTypeFour = function() {
    x = this.x;
    y = this.y;
    context.fillStyle = '#1e2fdf';
    context.fillRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
    context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
    context.fillStyle = '#FFFFFF';
    context.fillRect((BLOCK_W * x) + (BLOCK_W / 5) + INDENT, (BLOCK_H * y) + (BLOCK_H / 5), 
                     (BLOCK_W - (BLOCK_W / 5) * 2 - 1), (BLOCK_H - (BLOCK_W / 5) * 2 - 1));
    context.strokeRect(BLOCK_W * x + INDENT, BLOCK_H * y, BLOCK_W - 1 , BLOCK_H - 1);
}