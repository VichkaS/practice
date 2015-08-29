var RecordsScreen = function(game) {
    this.canvas = game.getCanvas();
    this.context = this.canvas.getContext('2d');
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
    this.context.font = "bold 40px Arial";
    this.context.fillStyle = '#fff';
    if (localStorage["tetrisRecords"] == null) {
        this.context.fillText("No records", 310, 260);
    }
    else { 
        var countRecords = listRecords.length;
        if (countRecords > this.MAX_COUNT_RECORDS) {
            countRecords = this.MAX_COUNT_RECORDS;
        };
        for (var i = 0; i < countRecords ; i++) {
            indentDown += 40;
            this.context.fillText(listRecords[i].name, 100, 220 + indentDown);
            this.context.fillText(listRecords[i].score, 310, 220 + indentDown);
        }
    }
};

RecordsScreen.prototype.show = function() {
    var rScreen = new Image();
    var self = this;
    rScreen.src = 'backgroundRecords.png';
    rScreen.onload = function(){
        self.context.drawImage(rScreen, 0, 0);
        self._printRecords();
    };
    document.body.onkeydown = function(e) {
        var key = {27: 'menu'};
        if (key[e.keyCode]) {
            self.context.fillStyle = 'black';
            self.context.fillRect(0, 0, canvas.width, canvas.height);
            game.start();
        };
    };
};

function compareObjects (a, b) {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  return 0;
};