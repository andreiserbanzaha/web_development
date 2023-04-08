var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "bogdan",
		password: "123"
	}
];

var newsfeed = [
	{
		username: "bobby",
		timeline: "i'm so sad!"
	},
	{
		username: "sally",
		timeline: "i'm so pretty!!!!!"
	},
	{
		username: "cristi",
		timeline: "321"
	}
];

var isUserValid = function (username, password) {

	var isFound = false;
	database.forEach(function (uname) {
		if (uname.username === username && uname.password === password) {
			isFound = true;
		}
	});
	return isFound;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("wrong username or password!");
	}
}

var userNamePrompt = prompt("what's ur usErNAme?");
var passwordPrompt = prompt("what's ur pAsSwoRd?");

signIn(userNamePrompt, passwordPrompt);