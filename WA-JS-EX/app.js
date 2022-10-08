// !Ex1.1 - Yes or No 
//? Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
// ? string for false.
//*Ex1
const ex1 = (bool) => {
const str = bool === true? 'Yes' : 'No'
return bool
}
console.log(ex1(true));

console.log('-------------Next EX 2.1-----------');
// !Ex2.1 - Sum of lowest numbers
//?Create a function that returns the sum of the two lowest positive numbers given an array of
//?minimum 4 positive integers. No floats or non-positive integers will be passed.
//?For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//?[10, 343445353, 3453445, 3453545353453] should return 3453455.

let numPositive = [2131,4454,23,21321,-1,-2,7.4,677,123]
const sumPositive = () => {
    let arr = []
    for (let i = 0 ; i < numPositive.length;i++){
        if (numPositive[i] >= 0 ){
            arr.push(parseInt(numPositive[i]))  
        }

        res = arr.sort((a,b) => a - b).slice(0, 2).reduce((prev,cur) => prev + cur,0)

    }

    
    console.log(res);
}

sumPositive()
console.log('-------------Next EX 2.2-----------');
// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
//! 1 solution 
let testing = [1, 0, 0, 1];

const binary = (arr) =>{

    let exp = 0;
    let result = 0;
    
    for (let index = testing.length - 1; index >= 0; index--) {
    
      result +=  testing[index] != 0 ?  Math.pow((2 * testing[index]), exp) : 0;
      exp++;
    
    }
    console.log("result = " + result )
}

binary(testing)
//! 2 solution 
/*let binArray =   [1, 0, 1, 0];
    output = binArray.reduce((r, a) => (r << 1) | a);

console.log(output);
*/
console.log('-------------Next EX 2.3-----------');
// Ex2.3
const square = (sq) => {

  let y = Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq)+1)**2 : -1;
  return y
}

console.log(square(121));
console.log(square(625));
console.log(square(114));

console.log('-------------Next EX 2.4-----------');


//Ex2.4- unique

list =[ 1, 22, 22, 22, 1, 5 ]
list2 =[ 55, 55, 55, 55, 55, 5 ]
list3 =[ 1, 5, 7, 8, 1, 5 ,3]
const findUniq = (un) =>{
return un.filter(e => un.indexOf(e) === un.lastIndexOf(e)) //return multi numbers 
// return un.find(e => un.indexOf(e) === un.lastIndexOf(e)) //! return first number
}
console.log(findUniq(list));
console.log(findUniq(list2));
console.log(findUniq(list3));


console.log('-------------Next EX 2.5-----------');
//EX2.5
const sum = (n) => {
   
    return (n * (n+1)) / 2
}
// console.log(res);
console.log(sum(8));

//! function sum2(N) {
// !    let total = 0;
// !      for(let i = 1; i <= N; i++){
// !        total += i;
// !      }
// !      return total;
// !  }
// !  console.log(sum2(5));
console.log('-------------Next EX 2.6-----------');
//Ex 2.6
const centuryFromYear = (year) =>{

   let y =  year % 100 === 0? year / 100 : year / 100 + 1
   return Number (y.toFixed(0))
}
console.log(centuryFromYear(1601));

console.log('-------------Next EX 2.7-----------');


const mathBasic = (op,val1,val2)=>{

  return op ==='+'? val1+val2 : op === '-'?val1-val2 :op === '/'? val1 / val2:op === '*'? val1 * val2: 'Sorry Not a Math Operation'

  //! or readable : 
//   if(op ==='+'){
//     return val1+val2
//   }
//   else if(op ==='-'){
//     return val1-val2
//   }
//   else if(op ==='/'){
//     return val1/val2
//   }
//   else if(op ==='*'){
//     return val1*val2
//   }
//   else{
// return 'Sorry Not a Math Operation'
//   }
}

console.log(mathBasic('+',2,4));
console.log(mathBasic('-',15,18));
console.log(mathBasic('*',5,5));
console.log(mathBasic('/',49,7));

console.log('-------------Next EX 3.1-----------');

const population = (p0,percent,aug,p)=>{
    let i = 0
    for(; p0< p; i++){
       p0 += p0 * (percent / 100) +aug
       
    }
    return i
}

console.log(population(1500, 5, 100, 5000));
console.log(population(1500000, 2.5, 10000, 2000000));
console.log('-------------Next EX 3.2-----------');

let arr2=[[10,0],[4,7],[3,10],[5,2]]
const bus = (arr)=>{

    let total = 0;

    for ( let i = 0; i < arr.length;i++){
        total += arr[i][0] - arr[i][1];
       
    }
    return total 
    
}
console.log(bus(arr2));

console.log('-------------Next EX 4.1 Fibonacci-----------');

const fibonacci = (n) => {
    const arr = [0,1]

    for ( let i = 2 ; i < n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr

}
console.log(fibonacci(10));

console.log('-------------Next EX 4.2 tribonacci-----------');

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const tribonacci = (n) => {

    if( n === 0){
        return []
    }
    const arr = [0,0,1]

    for ( let i = 3 ; i < n;i++){
        arr[i] = arr[i-1] + arr[i-2] +arr[i-3]
    }
    return arr

}
console.log(tribonacci(7));


console.log('-------------Next EX 5.1 -----------');

const trim = (a)=>{

   let b = a.split('').slice(1, -1).join('')
   return b

}

console.log(trim('trim'));

console.log('-------------Next EX 5.2 -----------');

const repeatStr = (str,num) =>{

    let repeatStr = '';
//! first solution
//     while (num > 0){
//         repeatStr += str
//         num--;
//         }
//    return repeatStr

//? 2nd solution
  let b = num > 0? str.repeat(num): ''

  return b
}

console.log(repeatStr('Hello',5));

console.log('-------------Next EX 5.3 -----------');


str = 'hello-world-its-me'
const camel = (str) =>{
    
    
    // str = a.toLowerCase().split('-');

    // for(let i = 0; i < str.length;i++){
    //    let a = str[i] = str[i][0].toUpperCase() + str[i].slice(1);
        
    // }
    // return str.join('')


let b =  str.toLowerCase().replace(/[-_][a-z0-9]/g, (e) => e.slice(-1).toUpperCase())
return b
}
console.log(camel('Hello_world_its-me'));
console.log(camel('Hello_5-world-its_him'));

console.log('-------------Next EX 5.4 -----------');

const toWeirdCase = (a) => {

    a = a.toLowerCase().split(' ')

    for(let i = 0; i<a.length;i++){
        a[i]= a[i].split('')

        for(let j = 0; j<a[i].length;j++){
            if(j%2 ==0){

                a[i][j]=a[i][j].toUpperCase();
            }

        }a[i] = a[i].join('');
    } return a.join(' ')

    // let b = a.split(' ').map(str=>[...str]).map((e,i) => i % 2 ? e.toLowerCase():e.toUpperCase().join``).join` `;

    // return b

} 
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));

console.log('-------------Next EX 5.5 -----------');

const Abbreviate = (str) =>{

    str = str.toLowerCase().split(' ');

    for(let i = 0; i<str.length;i++){

        str[i]= str[i][0].toUpperCase().slice(-1)
    }
    return str.join('.')

}

console.log(Abbreviate('Hello World'))
console.log(Abbreviate('Sam Harris'))

console.log('-------------Next EX 5.6 -----------');

const mask = (arr) => {

    let four = arr.slice(-4);
    const fourArr = arr.split(", ");

    for(let i = 0; i< fourArr.length;i++){
        fourArr[i]= fourArr[i].replace(/[a-zA-Z0-9" "]/g, '#');
    }
    let str = fourArr.join('')
    let masky = str.slice(0,-4)+four;

    return masky


}

console.log(mask('234243as   dadad2313  2dsff2   3134'));

console.log('-------------Next EX 5.7 -----------');

const shortest = (str)=>{
    str = str.split(" ");
    str.sort((a,b) => a.length - b.length);
    return str[0]

    // console.log(str.join(' '));

}

console.log(shortest('shortest word of the string'));

console.log('-------------Next EX 6.1 -----------');

const mumbling = (str) =>{

    let split  = str.toLowerCase().split('')
    let arr = []
    
    for(let i = 0; i<split.length;i++){
        arr.push(split[i].repeat(i+1))
    }
    arr = arr.map(e => e.replace(/\b\w/g, letter => letter.toUpperCase())).join('-')

    return arr
}

console.log(mumbling('abcd'));
console.log(mumbling('RqaEzty'));
console.log(mumbling('cwAt'));

console.log('-------------Next EX 6.2 -----------');


const countDupe = (c) =>{

    let split = c.split('')
    let letter = []
    let count = 1;

    for (let i = 0 ; i<split.length;i++){
        if(split[i]===split[i+1]){
            count++
        }
        else{
            let val = `${count} ${split[i]} `
            letter.push(val);
            count = 1
        }
    }
    return letter.join('')

}

console.log(countDupe('aaabc'));

console.log('-------------Next EX 6.3 -----------');

const organize = (str1,str2)=>{

    let a = str1.split('')
    let b = str2.split('')
    let c= a.concat(b);
    let arr = []
    for (let i of c){
        if(arr.indexOf(i)===-1){
            arr.push(i)
        }
    }
    return arr.sort().join('')
}

console.log(organize('abcdefghijklmnopqrstuvwxyz','xxxxyyyyabklmopqz'));

console.log('-------------Next EX 6.4 -----------');

const isogram1 = (str)=>{ 
   let y =  str.toLowerCase().split("").every((c, i) => str.indexOf(c) == i);
   return y
  }

  console.log(isogram1('ab'));
  console.log(isogram1("moOse"));