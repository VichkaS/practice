function home (x, y, whith, hight) {
    this.x = x;
    this.y = y;
    this.whith = whith;
    this.hight = hight;
    this.lineWidth = 1;
    this.strokeStyle = "#FFFFFF";
}

home.prototype.drawHome = function(ctx) {
    x = this.x;
    y = this.y;
    whith = this.whith;
    hight = this.hight;
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.fillRect(x, y, whith, hight);    
    ctx.fillRect(x + 40, y - 150, 30, 100); 
    ctx.strokeStyle = this.strokeStyle;
    drawTriangle(ctx, x, 100, 200, whith);
    ctx.fillStyle = "#8B4513";
    ctx.fill();
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(x + (whith / 2) - 50, y + (hight / 2) - 50, 100, 170);    
    ctx.stroke();
}

function drawTriangle(context, left_padding, top_padding, height, width) {
    context.moveTo(0 + left_padding, 0 + height + top_padding);
    context.lineTo(width / 2 + left_padding, 0 + top_padding);
    context.lineTo(width + left_padding, 0 + height + top_padding);
    context.closePath();
}
