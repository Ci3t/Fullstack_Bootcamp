const button = document.querySelector('button')
const letters = document.querySelector('.letters')
const guessed = document.querySelector('.guessed')
const check = document.querySelector('.check')
console.log(guessed);


let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function checkRandom(ev) {
    let guess = ev.key;
    
   
    if(guess === randomLetter){
        guessed.textContent = guess
        check.textContent = 'You Guessed IT !'
        check.style.color = 'green'
        button.style.opacity = '1'
        button.textContent = 'Play again ?'
        ev.stopPropagation
        button.addEventListener('click',function(){
        check.textContent = 'Guess a Letter'
        check.style.color = ''
        button.style.opacity = ''
        letters.textContent=''
        guessed.textContent = '?'
        randomLetter =  alphabet[Math.floor(Math.random() * alphabet.length)];

    })
    
}else{
    check.textContent = 'Nope!Keep Trying'
    check.style.color = 'red'
    letters.textContent += guess
    
}

}
console.log(randomLetter);


// function randomLetter (){

//     const lettersLib = 'abcd'
//     let soloLetter = null

//     let letter1 = lettersLib[Math.floor(Math.random()* lettersLib.length)]
//     soloLetter = letter1
//     // console.log(soloLetter);
//     return soloLetter

// }

// window.addEventListener('keyup',checkRandom)

// function checkRandom(e) {
//     // check.textContent = 'Nope'?
//     console.log(e.target.value);
//     letters.textContent = `${e.key}`
//     if(e.key === randomLetter){
//         console.log('zamas')
//     }
// }
