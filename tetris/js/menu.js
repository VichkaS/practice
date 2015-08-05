var MenuScreen = function(game) {
    this._canvas = game.getCanvas();
    this._context = this._canvas.getContext('2d');
    this._buttons = [];    
};

MenuScreen.prototype._getIndentForButtonLeft = function() {
    return (this._canvas.width - 200) / 2;
}

MenuScreen.prototype.show = function() {
    canvas = this._canvas;
    buttons = this._buttons;
    this._drawMenu(buttons);
    canvas.onmouseup = function(e) {
        var x = e.pageX - canvas.offsetLeft, 
            y = e.pageY - canvas.offsetTop;
        if (x > buttons[0].x && x < buttons[0].x + buttons[0].w && y > buttons[0].y && y < buttons[0].y + buttons[0].h) {
            game.startGame();
            canvas.onmouseup = null;
        }
        if (x > buttons[1].x && x < buttons[1].x + buttons[1].w && y > buttons[1].y && y < buttons[1].y + buttons[1].h) {
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

function drawButton(context, buttons) {
    for (var ib = 0; ib < buttons.length; ib++) { 
        context.drawImage(buttons[ib].image, buttons[ib].x, buttons[ib].y);
    }
};

function initializeButton(MenuScreen, y, w, h, image) {
    x = MenuScreen._getIndentForButtonLeft();  
    var button = new Button(x, y, w, h, image);
    return button;
};

MenuScreen.prototype._drawMenu = function(buttons) {
    var buttonStart = new Image();
    buttonStart.src = 'button_start.png';
    button = initializeButton(this, 100, 188, 56, buttonStart);    
    buttons.push(button);
    
    var buttonRecords = new Image();
    buttonRecords.src = 'button_records.png';
    button = initializeButton(this, 200, 188, 56, buttonRecords);  
    buttons.push(button);
    context = this._context;
    
    window.onload = function() {
        drawButton(context, buttons);
    }
};