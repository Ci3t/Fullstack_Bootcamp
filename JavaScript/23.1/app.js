console.log(this);
//! ^ the global window

const myObj = {
    name: "Timmy",
    // greet: () => {
        greet(){
    console.log(`Hello ${this.name}`);
    },
    };
    myObj.greet();

    // a - undefined since its an arrow function 
    // b - to fix this need to make function declaration 

    // console.log(myObj.greet());


const myFuncDec = function () {
        console.log(this);
        console.log('hi');
}

//global window scope ?


const myFuncArrow = () => {
    console.log(this);
    };
    myFuncArrow();

    //global window scope

document.querySelector(".element").addEventListener('click',function(){
console.log(this);
});

//!error BRAIN DAMAGE! 


document.querySelector(".element").addEventListener(() => {
    console.log(this);
    });