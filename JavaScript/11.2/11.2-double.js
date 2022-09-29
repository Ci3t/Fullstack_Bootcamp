
const arr = [1,4,5,7,8,9,10];
const str = ['a','b','c','d','e','f','g']

const doubleValues = (dbl) => {
  arr3 = dbl.map(e => {
        return e * 2;
    });
    console.log(arr3)

} 
const onlyEvenValues  = (dbl) => {
  let arr2 = dbl.map(e => {
    if (e % 2 === 0){
     return e;
        }  

    }).filter(el => {if( el !== undefined) {return el}});
    
    console.log(arr2)

} 
const showFirstAndLast  = (dbl) => {
    let arr5 = [];
  let arr2 = dbl.forEach(function(e, i, arr){
    if (i === dbl.length - 1 ){ 
        arr5.push(dbl[0], dbl[i]);

    }
   
});
return arr5

} 
const vowelCount  = (str) => { 
    // str.map(w => {w.split('').map(e => str[e] = (str[e] || 0)+1)});
    const vowels ="aeiou"
     const spliter = str.split('')
     const obj ={};
     
     spliter.forEach((e)=>{
        if (vowels.indexOf(e.toLowerCase()) !== -1){
            if(e in obj){
                obj[e]++;
            }else{
                obj[e]=1;
            }
        }
    })
    return obj
    
}
function capitalize (str) { 
    return str.toUpperCase();

}
 
const shiftLetters = (inputString) =>{
    // let inputString = 'crazy';
  const alphabet = {
    'a':'b','b':'c','c':'d',
    'd':'e','e':'f','f':'g',
    'g':'h','h':'i','i':'j',
    'j':'k','k':'l','l':'m',
    'm':'n','n':'o','o':'p',
    'p':'q','q':'r','r':'s',
    's':'t','t':'u','u':'v',
    'v':'w','w':'x','x':'y',
    'y':'z','z':'a',
    'A':'B','B':'C','C':'D',
    'D':'E','E':'F','F':'G',
    'G':'H','H':'I','I':'J',
    'J':'K','K':'L','L':'M',
    'M':'N','N':'O','O':'P',
    'P':'Q','Q':'R','R':'S',
    'S':'T','T':'U','U':'V',
    'V':'W','W':'X','X':'Y',
    'Y':'Z','Z':'A'
  };
  
  let inputShifted = inputString.split('');
  for(let i = 0; i< inputShifted.length;i++) {
    inputShifted[i] = alphabet[inputShifted[i]];
  }
  return inputShifted.join('');
}





   
    

doubleValues(arr)
onlyEvenValues(arr)

console.log(showFirstAndLast(str))
console.log(vowelCount('hello world i am a programmer'))

console.log(shiftLetters('abCde'))