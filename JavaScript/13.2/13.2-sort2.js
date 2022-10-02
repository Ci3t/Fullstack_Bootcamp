const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];

let ascend = foods.slice().sort();
let descend = foods.slice().reverse()


console.log(ascend);
console.log(descend);


const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

  let ascend2 = foodsWithUpperCase.slice().sort((a, b) => a.localeCompare(b));
let descend2 = foodsWithUpperCase.slice().sort((a, b) => b.localeCompare(a))

console.log(ascend2);
console.log(descend2);

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];

longToShort= words.sort((a,b) => b.length - a.length)

console.log(longToShort);
