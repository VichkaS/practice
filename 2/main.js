var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
home = new Home(100, 300, 250, 250);
glade = new Glade();
cloud = new Cloud();
cloud.x_s = 200;
cloud.y_s = 70;
cloud1 = new Cloud();
cloud1.x_s = 300;
cloud1.y_s = 170;
vx = 1;
vx1 = 1.5;
(function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cloud.x_s += vx;
    cloud1.x_s += vx1;
    if (cloud.x_s > 1020)
    {
        cloud.x_s = -120;
    }
    if (cloud1.x_s > 1020)
    {
        cloud1.x_s = -120;
    }
    cloud1.drawCloud(ctx);
    home.drawHome(ctx);
    cloud.drawCloud(ctx);
    glade.drawGlade(ctx, 200, 650, 400, 150, "#008000");
    glade.drawGlade(ctx, 900, 650, 400, 160, "#008000");
    glade.drawGlade(ctx, 600, 680, 400, 140, "#006400");   
}());