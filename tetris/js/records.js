var RecordsScreen = function(game) {
    this.canvas = game.getCanvas();
    this.context = this.canvas.getContext('2d');
};

RecordsScreen.prototype.show = function() {
    var rScreen = new Image();
    var context = this.context;
    rScreen.src = 'backgroundRecords.png';
    rScreen.onload = function(){
        context.drawImage(rScreen, 0, 0);
        var ind = 0;
        context.font = "bold 40px Arial";
        context.fillStyle = '#fff';
        if (localStorage.length == 0) {
            context.fillText("No records", 310, 260);
        }
        else {
            if (localStorage.length > 8) {
                countRecords = 8;
            }
            else {
                countRecords = localStorage.length; 
            }
            for (var i = 0; i < countRecords; i++) {
                var key = localStorage.key(i);
                ind += 40;
                context.fillText(key, 100, 220 + ind);
                context.fillText(localStorage[key], 310, 220 + ind);
            }
        }
    };
    document.body.onkeydown = function(e) {
        if (e.keyCode == 27) {
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);
            game.start();
        };
    };
};

RecordsScreen.prototype._printTable = function() {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);  
};