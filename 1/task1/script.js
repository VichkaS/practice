var result = document.getElementById('result');
function printString() {
    result.style.color = getRandomColor();
    result.innerHTML = "JavaScript is greeting your, " + document.getElementById( 'name' ).value + "!";
}
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}