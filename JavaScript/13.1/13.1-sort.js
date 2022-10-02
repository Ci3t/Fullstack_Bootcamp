const numbers = [1, -5, 666, 2, 400, 11];

ascend = numbers.sort();

console.log(ascend);

descend = numbers.sort((a , b) => b-a)

console.log(descend);