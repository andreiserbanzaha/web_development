
const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();

newFunc();

// CLOSURE (read more about this)
// function executed -> 
// never going to be called again ->
// it's going to remember the references to parent's variables so that child can access them

// CURRYING
const multiply = (a, b) => a * b;

// kind of like a function inside another function.
// settings the parameters one by one
const curriedMultiply = (a) => (b) => a * b

// e.g. curriedMultiply(3) will result in: (b) => 3 * b;
console.log("curriedMultiply(3)(4) = " + curriedMultiply(3)(4));

// it's very extensible
const multiplyBy5 = curriedMultiply(5);
console.log("multiplyBy5(10) = " + multiplyBy5(10));

// COMPOSE
const compose = (f, g) => (a) => f(g(a));

// compose example:
const sum = (number) => ++number;

console.log("compose sum: " + compose(sum, sum)(5));

// side effects -> anything that happens inside a function that we do not know about

// Avoiding side effects -> functional purity
// - avoid side effects
// - always return!
// => DETERMINISTIC
