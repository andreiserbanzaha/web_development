
// accessing object properties
const obj = {
	name: "bobby",
	experience: 100,
	wizardLevel: false
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// same as 
const { player, experience } = obj;
let { wizardLevel } = obj;


// create dynamic properties
const name = 'john snow';

const obj =  {
	[name]: 'hello', // property is 'john snow'
	[1 + 3]: 'hi'    // property is '4'
};


// creating and assigning a property which has the same name with the variable
const a = 10;
const b = "andrew";
const c = true;

const obj = {
	a: a,
	b: b,
	c: c
};
// same as 
const obj = { a, b, c };


// Template strings

const name = "andrei";
const age = 27;

const greeting = "hello, " + name + ", you are of age: " + age + "!";
const greetingBetter = `hello ${name}, you are of age ${age - 10}!`;

// default arguments
function greet(name = '', age = 20) {
	return `hello ${name}, you are of age ${age - 10}!`;
}

// symbols
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3; // false -> Symbol() creates a unique variable


// arrow functions
function sum(a, b) { return a + b; }
const sum = (a, b) => { return a + b; } 
const sum = (a, b) => a + b;  // no brackets and return needed if single line




