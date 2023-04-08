
// add spaces before / after string
let a = "andrei".padStart(10);
let b = "bogdan".padEnd(10);

console.log(a);
console.log(b);

// support for comma after last parameter
const fun = (a, b, c, d, ) => {
    console.log(a, b, c, d);
}

let obj = {
    username0: "andrei",
    username1: "bogdan",
    username2: "cristi"
}

Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(value => {
    console.log(value);
});

const arr = Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});
console.log(arr);