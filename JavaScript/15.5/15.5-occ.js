

function countOccurrences(str, char) {
  let counter = 0; // counter remain 0 
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1; //! counter missing = to add to counter var 
      counter += 1;
    }
  }
  return counter;
}
let res = countOccurrences("ini mini miny moe ", "n");

console.log(res);

//! node js used counter missing = to update counter