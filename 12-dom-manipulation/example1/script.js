
// apply cool title class to h1
var h1 = document.querySelector("h1");
h1.className = "coolTitle";

var li = document.querySelectorAll("li");

for (var i = 0; i < li.length; ++i) {
    li[i].className = li[i].className + " coolFriends";
}

document.querySelectorAll("li")[2].classList.add("coolFriendsCheck");

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
    console.log("Button Clicked!");
})
