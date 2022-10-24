
const obj = {
    name: 'Mai',

    printName(){
        console.log(`My Name ${this.name}`)
    },

    delayName(){
        // this.printName()
        setTimeout(this.printName.bind(this), 1000);
    }

}

// console.log(obj.delayName.call(obj.printName()));

console.log(obj.delayName());

