

let words = ['cat', 'dog', 'eagle', 'mouse', 'lion', 'tiger', 'worm', 'turtle'];
// let word = ['cat','dog','eagle','mouse','lion','tiger','worm','turtle',13];
let word = [ 1, 2,'a', 3, 4, 5, 6]

const makeAllCaps = (arr) => {
    let x;
    return new Promise((resolve, reject) => {
       

            
        
            if(arr.every(x =>  typeof x === 'string')){
                x = arr.map(e => e.toUpperCase())
                resolve()
            }else{
                reject()
            }
           
        });
        
        

    };
    

   
const sortWords = (e) => {
    return new Promise((resolve, reject) => {
        if(e.every(x =>  typeof x === 'string')){
            resolve(e.sort())

        }else{
            reject(console.log('Not a string'))
        }
    });
    

}



// sortWords(words) 
makeAllCaps(words) //non string

    .then(() => {
        console.log(`Resolved Contain a String `);
        return words
       
    })
    .then(()=>{
        console.log(`Sorted `);
        sortWords(words)
        
    })
    .catch(() => {
        console.log(`Rejected Contain a non String`);
    })

