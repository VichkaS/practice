var field = document.getElementById('field');
var square = document.getElementById('square');
function Move() {
    var x = document.getElementById( 'x' ).value;    
    var y = document.getElementById( 'y' ).value;
    var fieldCoords = field.getBoundingClientRect();
    var squareCoords = {
        x: x - square.clientHeight / 2,
        y: y - square.clientHeight / 2
    };
    if (squareCoords.x < 0) {
        squareCoords.x = 0;
    }
    if (squareCoords.y < 0) {
        squareCoords.y = 0;
    }
    if (squareCoords.y + square.clientWidth > field.clientWidth) {
        squareCoords.y = field.clientWidth - square.clientWidth;
    }
    if (squareCoords.x + square.clientHeight > field.clientHeight) {
        squareCoords.x = field.clientHeight - square.clientHeight;
    }
    square.style.left = squareCoords.y + 'px';
    square.style.top = squareCoords.x + 'px';
}