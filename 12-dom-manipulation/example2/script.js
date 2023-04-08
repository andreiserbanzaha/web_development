
var enterButton = document.getElementById("enterButton");
var userInput = document.getElementById("userInput");

function userInputValid() {
    return userInput.value.length > 0;
}

function resetUserInput() {
    userInput.value = "";
}

function addToShoppingList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    document.getElementById("shoppingList").appendChild(li);
}

function addToShoppingListByClick() {
    if (userInputValid()) {
        addToShoppingList();
        resetUserInput();
    }
}

function addToShoppingListByKeyPress(event) {
    if (event.keyCode === 13 && userInputValid()) {
        addToShoppingList();
        resetUserInput();
    }
}

// This does not execute. It just sets the callback!
enterButton.addEventListener("click", addToShoppingListByClick);
userInput.addEventListener("keypress", addToShoppingListByKeyPress);