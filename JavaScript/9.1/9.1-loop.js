const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];


lists = [];
for( let i = 0; i<   listOfNeighbours.length;i++){
   
   list = listOfNeighbours[i];
   for(let j = 0; j < list.length; j++){
     lists = list[j]
    
    
     console.log(`Neighbour: ${lists}`);
}
// lists.push(listOfNeighbours[i])
    
}
// console.log(`Neighbour: ${lists}`);