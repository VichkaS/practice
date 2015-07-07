var Home = function(x, y, whith, hight) {
    this.x = x;
    this.y = y;
    this.whith = whith;
    this.hight = hight;
    this.strokeStyle = "#FFFFFF";
}

Home.prototype.drawHome = function(ctx) {
    x = this.x;
    y = this.y;
    whith = this.whith;
    hight = this.hight;
    this._drawWalls(x, y, whith, hight);
    this._drawRoof(x, 100, 200, whith);
    this._drawDoor(x, y, whith, hight);    
}

Home.prototype._drawDoor = function(x, y, whith, hight) {
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(x + (whith / 2) - 50, y + (hight / 2) - 50, 100, 170);    
    ctx.stroke();
    
}

Home.prototype._drawWalls = function(x, y, whith, hight) {
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.fillRect(x, y, whith, hight);    
}

Home.prototype._drawRoof = function(left_padding, top_padding, height, width) {
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(x + 40, y - 150, 30, 100); 
    ctx.strokeStyle = this.strokeStyle;
    ctx.moveTo(0 + left_padding, 0 + height + top_padding);
    ctx.lineTo(width / 2 + left_padding, 0 + top_padding);
    ctx.lineTo(width + left_padding, 0 + height + top_padding);
    ctx.closePath();
    ctx.fillStyle = "#8B4513";
    ctx.fill();
}