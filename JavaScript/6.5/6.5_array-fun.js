


arr = Array(100).fill({ pizza: 'HOT' })
console.log(arr)

arr2 = Array.from({length: 100}, (v,i) => i);
    console.log(arr2)

const obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}


arr4 = Object.values(obj);

console.log(arr4)

arr3 = ['car','hot','food','meow']

Obj3 = Object.assign({},arr3);
console.log(Obj3)

ar = Array.isArray(arr3)
console.log(ar)

arr6 = arr3.slice(0);
arr6.push('Hello')
arr3.push('NOOO')
console.log(arr6);
arr7 = arr3;
console.log(arr7)
console.log(arr3)