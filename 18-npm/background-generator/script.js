var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7];
console.log("array:", _.without(array, 3));

var res = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomBtn = document.getElementById("randomButton");

var hexaTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    res.textContent = body.style.background + ";";
}
function generateRandomColor() {
    var result = '#';

    for (var i = 0; i < 6; ++i) {
        result += hexaTable[Math.floor(Math.random() * 16)];
    }
    return result;
}

randomBtn.addEventListener("click", function () {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient();