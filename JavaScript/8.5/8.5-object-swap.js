
carr = {
    model: 'BMW',
        color: 'Red',
        year: '2022'
}
const swaps = (swap) =>{

    swap = {}
    Object.entries(carr).forEach(element =>{
        let key = element[0];
        let value = element[1];
        swap[value] = key;
    
    })
    console.log(swap);
    
}
swaps()