//! 1. Build your own filter method with the help of prototypes
// !2. Build your own find method with the help of prototypes
//? Extra
//! 3. Build your own reduce method with the help of prototypes

let arr1 = [1,2,3,4,5,6]

Array.prototype.filter2 = function (f) {
    let filter1 = []

    for (let i=0;i<arr1.length;i++){
        if(f(this[i])){
            filter1.push(this[i])
        }

    }
        return filter1
}

let x = arr1.filter2(element => {return element % 2 ===0})

console.log(x);

Array.prototype.find2 = function (f) {
    

    for (let i=0;i<arr1.length;i++){
        if(f(this[i])){
            return this[i]
        }

    }
       
}

let x12 = arr1.find2(element => {return element > 2})
console.log(x12);
