const prompt = require('prompt-sync')();

const grades = (grade) => {

    // grade = parseInt(prompt('Your Grade is:'))
    if (grade < 0 || grade > 100){
        console.log('Invalid mark, outside range 0-100');
    } else if 
    (grade <= 64){
        console.log('F');
    }
     else if 
    (grade <= 69){
        console.log('D');
    }
     else if 
    (grade <= 79){
        console.log('C');
    }
     else if 
    (grade <= 89){
        console.log('B');
    }else{
        console.log('A');
    }
}
   



grades(99);