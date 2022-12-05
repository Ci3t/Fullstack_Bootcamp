import { add,minus,multi } from "./func.js";

//!difference : 
//* require
//? require is non lexical 
//? can run where it has been put in the program 
//?can be called anywhere and anytime in the program
//?need to use .js extension with requre

//* import 
//? is lexical and sorted to the top of the program 

//? can run at the start of the program and cant be called conditionally 
//?need .mjs extension 
//?need experimental flag modules if you use import 


//* import require type module in package.json

console.log(add(5,5));
console.log(minus(7,5));
console.log(multi(5,5));