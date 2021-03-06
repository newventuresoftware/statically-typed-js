// https://github.com/lukehoban/es6features

// Template Strings
const city = 'Paris';
console.log(`Welcome to ${city}! Enjoy your stay.`)

// Object Destructuring
const obj = { a: 1, b: true, c: 'c' };
const { a, b } = obj;
console.log(a, b); // 1, true

// Array Destructuring
const [x, y, ...rest] = [10, 20, 30, 40, 50];
console.log(x, y, rest); // 10, 20, [30, 40, 50]

// Default Values
function logMessage(message: string = 'Hello World') {
    console.log(message);
}

logMessage('TypeScript Rocks!'); // 'TypeScript Rocks!'
logMessage(); // 'Hello World'

// Arrow Functions
const isEven = (n: number): boolean => {
    return n % 2 === 0;
};

console.log(isEven(2)); // true

var sum = (x, y) => x + y;
console.

const squares = [1, 2, 3, 4, 5].map(x => x * x);

// for of
for(let val of squares) {
    console.log(val);
}
