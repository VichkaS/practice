var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    x_s = 0,
    y_s = 0,
    vx = 0,
    vy = 0,
    x_e = 0,
    y_e = 0,
    easing = 0.05,
    square = new Image();
square.src = "square.png";
context.drawImage(square, 0, 0);

function Move() {
    x_e = document.getElementById( 'x' ).value;    
    y_e = document.getElementById( 'y' ).value;
}
(function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
    var vx = (x_e - x_s) * easing,
        vy = (y_e - y_s) * easing;    
    x_s += vx;
    y_s += vy;
    context.drawImage(square, x_s, y_s);
}());