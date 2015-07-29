var INDENT_BUTTON = (canvas.width - 200) / 2;
var buttons = [];

var MenuScreen = function(game) {
    var canvas = game.getCanvas();
    var context = canvas.getContext('2d');
};

MenuScreen.prototype.show = function() {
    this._drawMenu();
    canvas.onmouseup = function(e) {
        var x = e.pageX - canvas.offsetLeft, 
            y = e.pageY - canvas.offsetTop;
        if (x > buttons[0].x && x < buttons[0].x+buttons[0].w && y > buttons[0].y && y < buttons[0].y+buttons[0].h) {
            //alert('Игра началась');
            game.startGame();
            canvas.onmouseup = null;
        }
        if (x > buttons[1].x && x < buttons[1].x+buttons[1].w && y > buttons[1].y && y < buttons[1].y+buttons[1].h) {
            alert('Не доступно');
        }
    }
};

function Button(x, y, w, h, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
};

function drawButton(context, button) {
    context.drawImage(button.image, button.x, button.y);
};

function drawScene() {
    for (var ib = 0; ib < buttons.length; ib++) { 
        drawButton(context, buttons[ib]);
    }
};

MenuScreen.prototype._drawMenu = function() {
    var buttonStart = new Image();
    buttonStart.src = 'button_start.png';
    buttonStart.onload = function() {};
    buttons.push(new Button(INDENT_BUTTON, 100, 188, 56, buttonStart));
    
    var buttonRecords = new Image();
    buttonRecords.src = 'button_records.png';
    buttonRecords.onload = function() {};
    buttons.push(new Button(INDENT_BUTTON, 200, 188, 56, buttonRecords));
    
    window.onload = function () {
        drawScene();
    }
};