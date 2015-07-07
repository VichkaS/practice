function glade(x, y)
{
    this.x = x;
    this.y = y;
    this.lineWidth = 3;
    this.strokeStyle = "#000000";
}

glade.prototype.drawGlade = function(ctx, x, y, a, b, color) {

    x = x;
    y = y;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;

  // Переносим СК в центр будущего эллипса
  ctx.translate(x, y);
  ctx.scale(a / b, 1);
  ctx.strokeStyle = this.strokeStyle;
  // Рисуем окружность, которая благодаря масштабированию станет эллипсом
  ctx.arc(0, 0, b, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();
  ctx.closePath();
  ctx.fillStyle = color;   
  ctx.fill();
  ctx.strokeStyle = this.strokeStyle;
}