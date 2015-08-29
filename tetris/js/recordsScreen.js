var RecordsScreen = function(game) {
    this._canvas = game.getCanvas();
    this._context = this._canvas.getContext('2d');
};

RecordsScreen.MAX_COUNT_RECORDS = 8;

RecordsScreen.prototype._getRecords = function() {
    var obj = JSON.parse(localStorage["tetrisRecords"]);
    var listRecords = [];
    for (var i in obj) {
        listRecords.push({ name: i, score: obj[i]});
    };
    listRecords.sort(compareObjects);
    return listRecords;
};

RecordsScreen.prototype._printRecords = function() {
    var indentDown = 0;
    var listRecords = this._getRecords();
    this._context.font = "bold 40px Arial";
    this._context.fillStyle = '#fff';
    if (localStorage["tetrisRecords"] == null) {
        this._context.fillText("No records", 310, 260);
    }
    else { 
        var countRecords = listRecords.length;
        if (countRecords > this.MAX_COUNT_RECORDS) {
            countRecords = this.MAX_COUNT_RECORDS;
        };
        for (var i = 0; i < countRecords ; i++) {
            indentDown += 40;
            this._context.fillText(listRecords[i].name, 100, 220 + indentDown);
            this._context.fillText(listRecords[i].score, 310, 220 + indentDown);
        }
    }
};

RecordsScreen.prototype.show = function() {
    var rScreen = new Image();
    var self = this;
    rScreen.src = 'backgroundRecords.png';
    rScreen.onload = function(){
        self._context.drawImage(rScreen, 0, 0);
        self._printRecords();
    };
    document.body.onkeydown = function(e) {
        var key = {27: 'menu'};
        if (key[e.keyCode]) {
            game.start();
        };
    };
};

function compareObjects (a, b) {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  return 0;
};