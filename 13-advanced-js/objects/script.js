
// ========== reference type ==========

console.log("[] === [] ->", [] === []);
console.log("[1] === [1] ->", [1] === [1]);

var object1 = { value: 10 };    // object1 -> holds the address of where that object is stored
var object2 = object1;          // references object1
var object3 = { value: 10 };    // object3

console.log('object1 === object2 -> ', object1 === object2);
console.log("object1 === object3 ->", object1 === object3);

// true, false, undefined, 1, "hello" -> primitive types
// objects created by the programmer -> non-primitive -> reference types!

// ========== context ==========

// *this* keyword 

console.log(this); // Window

class Foo {
    constructor() {
        console.log('Foo constructor');
    }

    printThis() {
        console.log(this);
    }
};

const foo = new Foo();
foo.printThis();


const obj = {
    a: function () {
        console.log('foo object:', this);
    }
};
obj.a();

// ========== instantiation ==========

class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, My name is ${this.name}. I'm a ${this.sex} and I'm of age ${this.age}`);
    }
};

const p = new Person("andrew", "male", 27);
p.introduce();


class Female extends Person {
    constructor(name, age) {
        super(name, 'female', age);
    }

    complain() {
        console.log('Female', this);
    }
}

class Male extends Person {
    constructor(name, age) {
        super(name, 'male', age);
    }

    shout() {
        console.log('Male', this);
    }
}

const misty = new Female("Misty", 30);
misty.complain();

const john = new Male("John", 25);
john.shout();





