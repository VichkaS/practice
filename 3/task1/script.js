var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d'),
image = new Image(),
vx = 0,
vy = 0,
ax = 0,
ay = 0;
image.src = "ball.png";
window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 38:
      ay = -1;
      break;
    case 40:
      ay = 1;
      break;
    case 37:
      ax = -1;
      break;
    case 39:
      ax = 1;
      break;
  }
}, false);
          
window.addEventListener('keyup', function () {
    ax = 0;
    ay = 0;
}, false);

(function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (vx + ax + image.width < canvas.width && vx + ax > 0) {
        vx += ax;
    }
    
    if (vy + ay + image.height < canvas.height && vy + ay > 0) {
        vy += ay;
    }
    context.drawImage(image, vx, vy);
}());