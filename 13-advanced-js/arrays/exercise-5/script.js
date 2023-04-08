// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    }
];
console.log('initial array', array);

// Create an array using forEach that has all the usernames with a "!" 
// to each of the usernames
const exclamationArray = [];
array.forEach(element => {
    let newElement = {};
    newElement.username = `${element.username}!`;
    newElement.team = element.team;
    newElement.score = element.score;
    newElement.items = element.items;
    exclamationArray.push(newElement);
});
console.log(exclamationArray);
console.log('initial array', array);

// Create an array using map that has all the usernames with a "?"
// to each of the usernames
const mapArray = array.map(element => {
    let newElement = {};
    newElement.username = `${element.username}?`;
    newElement.team = element.team;
    newElement.score = element.score;
    newElement.items = element.items;
    return newElement;
});
console.log(mapArray);
console.log('initial array', array);

// Filter the array to only include users who are on team: red
const teamRed = array.filter(element => element.team === "red");
console.log(teamRed);
console.log('initial array', array);

//Find out the total score of all users using reduce
let acc = 0;
console.log('total score: ', array.reduce((acc, element) => {
    return acc + element.score;
}, acc));


// (1), what is the value of i?
// (2), Make this map function pure:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);
console.log(arrayNum);
console.log(newArray);

// BONUS: create a new list with all user information,
// but add "!" to the end of each items they own.

const answer = array.map(user => {
    user.items = user.items.map(item => {
        console.log(item + "!");
        return item + "!"
    });
    return user;
})
console.log('answer: ', answer);
console.log(array); // array changes