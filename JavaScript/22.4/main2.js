const player1 = document.querySelector("#player1-race");
const player2 = document.querySelector("#player2-race");
let player1C = player1.firstElementChild;
let player2C = player2.firstElementChild;



window.addEventListener("keyup", (e) => {
    const key = e.key;
        if(key === "a"){
            if(player1C.nextElementSibling !== null){
                player1C.classList.remove('active');
                player1C = player1C.nextElementSibling;
                player1C.classList.add('active')
            }else{
                alert('Player 1 Won')
            }
        }
        
        if(key === "d"){
        if(player2C.nextElementSibling !== null){
            player2C.classList.remove('active');
            player2C = player2C.nextElementSibling;
            player2C.classList.add('active')
        }else{
            alert('Player 2 Won')
        }
     }

});

