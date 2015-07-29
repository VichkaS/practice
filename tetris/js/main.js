var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var game = new TetrisGame(canvas);
game.start();