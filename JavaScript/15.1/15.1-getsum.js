function getSum(arr1, arr2){
    const sum = 0;
    for (let i=0; i < arr1.length; i++){  // breaks here arr undefined 
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    // getSum([1,2,3][5,66,23]);  //? missing , between array
    getSum([1,2,3],[5,66,23]);  //? missing , between array

//! use vscode chrome debugger 
