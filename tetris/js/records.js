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
        var indentDown = 0;
        context.font = "bold 40px Arial";
        context.fillStyle = '#fff';
        if (localStorage["tetrisRecords"] == null) {
            context.fillText("No records", 310, 260);
        }
        else {
            var obj = JSON.parse(localStorage["tetrisRecords"]);
            var listNew = [];
            for (var i in obj) {
                listNew.push({ name: i, score: obj[i]});
            };
            listNew.sort(compareObjects);
            var countRecords = listNew.length;
            if (countRecords > 8) {
                countRecords = 8;
            };
            for (var i = 0; i < countRecords ; i++) {
                indentDown += 40;
                console.log(listNew[i].score);
                context.fillText(listNew[i].name, 100, 220 + indentDown);
                context.fillText(listNew[i].score, 310, 220 + indentDown);
            }
        }
    };
    document.body.onkeydown = function(e) {
        var key = {27: 'menu'};
        if (key[e.keyCode]) {
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);
            game.start();
        };
    };
};

function compareObjects (a, b) {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  return 0;
};