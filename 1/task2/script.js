window.onmousemove = printCoords;
function printCoords(){
  document.getElementById('X').innerHTML = "x = " + event.clientX;
  document.getElementById('Y').innerHTML = "y = " + event.clientY;
}