const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];


const compare = (arr1,arr2) => {
    // arr = arr1.toString
    arr = []
    for (let i =0; i < arr1.length; i++){
        for (let j =0; j < arr2.length; j++){

            if(arr1[i] === arr2[j])
            arr.push(arr1[i]);
        }
}
console.log(arr)
}
compare(food,food1)

//!2nd solution
const compare2 = (arr1,arr2) => {
    arr3 = [];
    arr1.sort();
    arr2.sort();
    for(let i = 0; i < arr1.length;i++){
        if (arr2.indexOf(arr1[i]) > -1){
            arr3.push(arr1[i]);
        }
    }console.log(arr3)

}

compare2(food,food1)