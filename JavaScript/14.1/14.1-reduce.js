const numbers = [2,4,6,11,13,17,18,10,8];


const max = () => {

    b = numbers.reduce((max,current) =>{
        if (current > max)
        return current;
        return max;
    })
    return b
}

const average = () => {
    
    a = numbers.reduce((total,current) => {
        return total + current;
    })
    return a

}


const sumEven = () => {
    even = []
    

        for(let i = 0; i<numbers.length;i++){
            numbers[i] %2 ===0? even.push(numbers[i]):0;
        }
        return even.reduce((a,b) => a+b , 0)
       
        

}

console.log(average());
console.log(max());
console.log(sumEven());