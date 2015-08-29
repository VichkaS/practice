var Block = function(x, y) {
    this._canvas = game.getCanvas();
    this._context = this._canvas.getContext('2d');
    this._x = x;
    this._y = y;
};

Block.BLOCK_W = 30;
Block.BLOCK_H = 30;
Block.INDENT = 250;

Block.TYPES = {
    BLUE_SQUARE_AND_SMALL_WHITE_SQUARE: 1,
    BLUE_SQUARE: 2,
    RED_SQUARE: 3,
    BLUE_SQUARE_AND_BIG_WHITE_SQUARE: 4,
};

Block.prototype._drawBasis = function(color) {
    var x = this._x,
        y = this._y;
    
    this._context.fillStyle = color;
    this._context.fillRect(Block.BLOCK_W * x + Block.INDENT, Block.BLOCK_H * y, Block.BLOCK_W - 1 , Block.BLOCK_H - 1);
    this._context.strokeRect(Block.BLOCK_W * x + Block.INDENT, Block.BLOCK_H * y, Block.BLOCK_W - 1 , Block.BLOCK_H - 1);
};

Block.prototype._drawSmallWhiteSquare = function() {
    var x = this._x,
        y = this._y;
    
    this._context.fillStyle = '#FFFFFF';
    this._context.fillRect(((Block.BLOCK_W * x) + 1) + Block.INDENT, Block.BLOCK_H * y, (Block.BLOCK_W / 4) - 1 , (Block.BLOCK_H / 4) - 1);
    this._context.strokeRect(Block.BLOCK_W * x + Block.INDENT, Block.BLOCK_H * y, Block.BLOCK_W - 1 , Block.BLOCK_H - 1);
};

Block.prototype._drawWhiteAngle = function(color) {
    var x = this._x,
        y = this._y;
    
    this._context.fillStyle = '#FFFFFF';
    this._context.fillRect((Block.BLOCK_W * x) + (Block.BLOCK_W / 5) + Block.INDENT, (Block.BLOCK_H * y) + (Block.BLOCK_H / 5), 
                           (Block.BLOCK_W - (Block.BLOCK_W / 5) * 3 - 1), (Block.BLOCK_H - (Block.BLOCK_W / 5) * 3 - 1));
    this._context.fillStyle = color;
    this._context.fillRect((Block.BLOCK_W * x) + (Block.BLOCK_W / 2.5) + Block.INDENT, (Block.BLOCK_H * y) + (Block.BLOCK_H / 2.5), 
                           (Block.BLOCK_W - (Block.BLOCK_W / 2) - 1), (Block.BLOCK_H - (Block.BLOCK_W / 2) - 1));
    this._context.strokeRect(Block.BLOCK_W * x + Block.INDENT, Block.BLOCK_H * y, Block.BLOCK_W - 1 , Block.BLOCK_H - 1); 
};

Block.prototype._drawBigWhiteSquare = function() {
    var x = this._x,
        y = this._y;
    
    this._context.fillStyle = '#FFFFFF';
    this._context.fillRect((Block.BLOCK_W * x) + (Block.BLOCK_W / 5) + Block.INDENT, (Block.BLOCK_H * y) + (Block.BLOCK_H / 5), 
                           (Block.BLOCK_W - (Block.BLOCK_W / 5) * 2 - 1), (Block.BLOCK_H - (Block.BLOCK_W / 5) * 2 - 1));
    this._context.strokeRect(Block.BLOCK_W * x + Block.INDENT, Block.BLOCK_H * y, Block.BLOCK_W - 1 , Block.BLOCK_H - 1);
};

Block.prototype.drawBlockFirstType = function() {
    this._drawBasis('#1e2fdf');
    this._drawSmallWhiteSquare();
    this._drawBigWhiteSquare();
};

Block.prototype.drawBlockSecondType = function() {
    this._drawBasis('#1e2fdf');
    this._drawSmallWhiteSquare();
    this._drawWhiteAngle('#1e2fdf');
};

Block.prototype.drawBlockThirdType = function() {
    this._drawBasis('#dd0d00');
    this._drawSmallWhiteSquare();
    this._drawWhiteAngle('#dd0d00');
};

Block.prototype.drawBlockFourthType = function() {
    this._drawBasis('#1e2fdf');
    this._drawBigWhiteSquare();
};