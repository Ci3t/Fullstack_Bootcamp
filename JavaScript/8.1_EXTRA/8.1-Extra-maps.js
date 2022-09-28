
const obj1 ={
    name:'Mary'
}
const obj2 ={
    name:'Jack'
}
const obj3 ={
    name:'Jane'
}

const people = new Map()
people.set(obj1,1)
// people.set({key},2)
// people.set({key},3)

// {{key},value}

const person = {}
for ( const [key, value] of people.get(key)){
  
    console.log(key);
}

// console.log(people);