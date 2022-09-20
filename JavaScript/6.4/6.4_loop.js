

populations = [144.1,5125,151,755]


   
//  const percentageOfWorld1 = (population) => {
//     percentages = []

//     for (let i =0 ; i< population.length; i++){
        
//        arr2 = (i / 7900) * 100;
        
//         percentages.push(arr2)
      
//     } console.log(percentages)
//  }

// percentageOfWorld1(populations)


 const percentageOfWorld2 = (population) => {
    percentages = []

    for (let i =0 ; i< population.length; i++){
        percentages.push(populations[i]/ 7900 * 100);
      
        
        
      }
     console.log(percentages)
 }

percentageOfWorld2(populations)

