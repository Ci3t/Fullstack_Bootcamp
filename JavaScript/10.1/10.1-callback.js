
const func1 = (x) =>{
    console.log(x)
}

const isString = (a, func1) => {
    func1(x);
    if (typeof a === 'string') {
        func1(a)
    }
}
isString('hello world')


const firstWordUpperCase = (b , cb) =>{
    
    a =  b.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    
    function cb (x) {
        console.log(x);
    }

    if(typeof a === 'string'){
        cb (a)
    }

}



firstWordUpperCase('hey there')


const hold = (c, cb2) => {
    function cb2 (x){
        console.log(x)
    }
    if(typeof c === 'string'){
        cb2 (c.toUpperCase())
    }
}

hold('hollaaaa')