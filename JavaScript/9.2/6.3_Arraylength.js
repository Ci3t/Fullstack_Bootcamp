
const array = ["boo", "doooo", "hoo","ro"]
const arrays = () => {
    arr = []
    for(let i = 0; i<array.length;i++){
        arr.push(array[i].length);
        
    }
    
    console.log(arr)
   
    
}


// ! while loop
arrays()
const array2 = ["boo", "doooo", "hoo","ro"]
const arrays2 = () => {
    arr2 = array2.length;
    let i = 0;
    arr4 =[]
    while (i < array2.length){
        let arr3 = array2[i].length
        // arr.push(array2[i].length)
        i++;
        arr4.push(arr3)
    }
    console.log(arr4)

    
}

arrays2()


//! the for loop solution is better for me easier to understand and shorter code less vars