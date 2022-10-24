const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];


function printName() {
    console.log(`my name is ${this.name}`);
    
}

function printHeroes(heroes, printFunc) {
    //add your code here
    for (let i of heroes){
        printFunc.call(i)
       
    }
   
   

}
printHeroes(superHeroes,printName)
