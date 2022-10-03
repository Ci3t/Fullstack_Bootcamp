function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
// findSmalest(52, 66, 2); //!breaks here 
findSmallest(52, 66, 2); //!breaks here 

//!used node debugging the issue is missing L letter in func name


