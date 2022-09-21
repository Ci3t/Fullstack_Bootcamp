const arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const count = (array) => {
    let arr2 = array.toString().toLowerCase().split('').reduce((ar,i)=>{
        if(ar[i]){
          ar[i]++
        } else {
          ar[i]=1
        }
        return ar
      },{})
      return console.log(arr2);
};
    
    //! one way
    // let arr = {}
    // let arr2 = {}
    //  array.forEach(w => w.split('').forEach(e => arr[e] = (arr[e] || 0)+1));
     

    // Object.entries(arr).forEach(element =>{
    //     let key = element[0];
    //     let value = element[1];
    //     arr2[key] = value;
    
    // })
// console.log(arr2)
//   } 

//    for (arr of array){
//     arr2 = arr.split('');
//    }
    // console.log(arr)


count(arr)