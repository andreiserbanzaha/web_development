console.log("Pass by value / reference");

var a = 10;
var b = a;
b++;

console.log('b:', b);
console.log('a:', a);

var obj1 =
{
    name: "andrei",
    password: "123"
};

var obj2 = obj1;
obj2.password = "321"; // also changes obj1

console.log("obj1:", obj1);
console.log("obj2:", obj2);


let array = [1, 2, 3, 4, 5];
let array2 = array;             // creates reference to the array
let array3 = [].concat(array);  // creates new array and adds values

array2.push(69); // modifies array so both references values are the same

console.log(array);
console.log(array2);
console.log(array3);


var obj3 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try to change me'
    }
}

// shallow copy -> only first layer object is going to be copied
var objClone = Object.assign({}, obj3);
objClone.a = 'x';

console.log('obj3', obj3);
console.log('objClone', objClone);

// shallow copy -> only first layer object is going to be copied
var objClone2 = { ...obj3 };
objClone2.c.deep = 'hahahah';

console.log('obj3', obj3);
console.log('objClone2', objClone2);

// deep copy
var deepCopy = JSON.parse(JSON.stringify(obj3)); // turn to string then parse 
deepCopy.c.deep = "voila!"
console.log(deepCopy);