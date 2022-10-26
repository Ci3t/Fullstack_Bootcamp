
const numCheck = (num) =>{

    return new Promise ((resolve,reject) =>{

        if(num > 10){
            resolve()
        }else{
            reject()
        }
    });


}

// numCheck(6)
numCheck(11)
.then(()=>{
    console.log('Resolved')
})
.catch(()=>{
    console.log('Rejected')
})

const numRand = (num) =>{
    let rand = Math.random();
    return new Promise ((resolve,reject) =>{

        if(rand > 0.6){
            resolve()
        }else{
            reject()
        }
    });


}


numRand()
.then(()=>{
    console.log('Resolved Rand')
})
.catch(()=>{
    console.log('Rejected Rand')
})