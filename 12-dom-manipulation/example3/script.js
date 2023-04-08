
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {

	// create li
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("listElement");
	li.addEventListener("click", function () {
		li.classList.toggle("done");
	});

	// create remove button
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Remove"));

	// create div which will contain both
	var div = document.createElement("div");

	// create list element with li and btn
	div.appendChild(li);
	div.appendChild(btn);

	// add new list element
	ul.appendChild(div);

	// remove button event for removing current element
	btn.addEventListener("click", function () {
		ul.removeChild(div);
	});

	// reset input value to empty string
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);