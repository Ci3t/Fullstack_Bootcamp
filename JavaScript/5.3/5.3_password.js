

//!ternary condition
const password = (pass) => {
   pass = pass.length > 7 ? 'Strong' : 'Weak';
   console.log(`Ternary Password is : ${pass}`)
}
password('hello213123')

//? if state func
const password2 = (pass) => {
    if (pass.length > 7){
        console.log('Your Password is: Strong')
    }else{
        console.log('Your Password is: Weak');
    }
}
password2('21343242352525425')

//todo logical op func
const password3 = (pass) => {
    if (pass.length > 7 && pass.length != 7){
        console.log('Your Password is: Strong')
    }else{
        console.log('Your Password is: Weak');
    }
}
password3('213432')

//todo Advanced Password op func
const password4 = (pass) => {
    // let regexp =  /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    pass = pass.length > 7 && pass.match(/[A-Z]/)  ? 'Very Strong': (pass.length > 7)? 'Strong' : 'Weak';
    console.log(`Your Ternary Pass is ${pass}`)
}

password4('hesdasdsadaAdsadasdado');
