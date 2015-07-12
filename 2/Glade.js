var Glade = function() {
    
}

Glade.prototype.drawGlade = function(ctx, x, y, a, b, color) {
    x = x;
    y = y;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.translate(x, y);
    ctx.scale(a / b, 1);
    ctx.arc(0, 0, b, 0, Math.PI * 2, true);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
    ctx.fillStyle = color;   
    ctx.fill();
}