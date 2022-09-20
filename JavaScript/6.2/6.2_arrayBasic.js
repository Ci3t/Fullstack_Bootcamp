
const people = ["Greg", "Mary", "Devon", "James"];
//? 1#
for (name of people){
    console.log(name)
}
// //! #2
// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

const peopleGreg = people.shift(0)
console.log(people);

const peoplejames = people.pop()
console.log(people);
const peopleMatt = people.unshift('Matt')
console.log(people);
const peopleName = people.push('RaNi')
console.log(people);


for (let i = 0; i < people.length; i++){
    let name = people[i];
    if (name == 'Mary')
    console.log(name)
     
}
const people1 = ["Greg", "Mary", "Devon", "James"];
peopleS =people1.slice(2,4)
console.log(peopleS);

console.log(people1.indexOf('Mary'));
console.log(people1.indexOf('Foo'));

peopleD = people1.splice(2, 1, 'Elizabeth', 'Artie')
console.log(people1)
let bob = 'bob'
withbob = people1.concat(bob)

console.log(withbob);
