var Cloud = function() {
    this.x_s = 0;
    this.y_s = 0;
}

Cloud.prototype.drawCloud = function(ctx) {
    x_s = this.x_s;
    y_s = this.y_s;
    
    this._drawCircle(x_s, y_s, 30);
    this._drawCircle(x_s + 30, y_s - 20, 30);
    this._drawCircle(x_s + 30, y_s + 20, 30);
    this._drawCircle(x_s + 70, y_s - 20, 30);
    this._drawCircle(x_s + 70, y_s + 20, 30);
    this._drawCircle(x_s + 100, y_s, 30);
}

Cloud.prototype._drawCircle = function(x, y, r) {
    ctx.beginPath(); 
	ctx.arc(x, y, r, 0, Math.PI*2, false); 
	ctx.closePath(); 
	ctx.fillStyle = "#FFFFFF"; 
    ctx.fill();
}

Cloud.prototype._Random = function(min, max) {
    return Math.random() * (max - min) + min;
}