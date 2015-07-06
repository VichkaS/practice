function glade(x, y)
{
    this.x = x;
    this.y = y;
    this.strokeStyle = "#FFFFFF";
}

glade.prototype.drawGlade = function(ctx, x, y, a, b, color) {

    x = x;
    y = y;
    //x = this.x;
    //y = this.y;
    //a = 400;
    //b = 150;
    ctx.strokeStyle = this.strokeStyle;
    // Запоминаем положение системы координат (CК) и масштаб
  ctx.save();
  ctx.beginPath();

  // Переносим СК в центр будущего эллипса
  ctx.translate(x, y);
 
  /*
   * Масштабируем по х.
   * Теперь нарисованная окружность вытянется в a / b раз
   * и станет эллипсом
   */
  ctx.scale(a / b, 1);
 
  // Рисуем окружность, которая благодаря масштабированию станет эллипсом
  ctx.arc(0, 0, b, 0, Math.PI * 2, true);
 
  // Восстанавливаем СК и масштаб
  ctx.restore();
  ctx.closePath();
  ctx.fillStyle = color;   
ctx.fill();
    ctx.strokeStyle = this.strokeStyle;
}