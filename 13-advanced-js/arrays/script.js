
const array = [1, 2, 4, 8];
console.log('initial array', array);


// forEach
const doubledArray = [];
array.forEach(element => {
    doubledArray.push(element * 2);
});
console.log('doubledArray', doubledArray);


// map -> forces a return element
const tripledArray = array.map((element) => {
    return element * 3;
});
// same, but cleaner
// const tripledArray = array.map(element => element * 3);
console.log('tripledArray', tripledArray);


// filter
const filteredArray = array.filter(element => element > 5);
console.log('filteredArray', filteredArray);


// reduce
let accumulatorInitialValue = 0;
const reducedArray = array.reduce((accumulator, elem) => {
    return accumulator + elem;
}, accumulatorInitialValue);
console.log('reducedArray', reducedArray);
