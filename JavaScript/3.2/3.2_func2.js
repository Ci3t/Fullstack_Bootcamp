/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit
// return functions (one of each).
// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }

welcome = () => {let welcome = console.log('Welcome to Appleseeds Bootcamp!')}
;

welcome();

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }

const power = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
console.log(power(7));

// From function expressions to IIFE functions.

// const squareRoot = a => Math.sqrt(a)();

(function squareRoot(a){
   console.log( Math.sqrt(8));
})();

// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;

( randomNumbers = (a,b) => {
    console.log(Math.random() * (a - b) + b)
})(7,9);
