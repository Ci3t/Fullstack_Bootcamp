

// let select = document.getElementById("select-menu");
// let list = document.getElementById("list");

// select.onclick = function(){
//     list.classList.toggle("open");

// }

const plus = document.querySelector(".cart-btn-top")
let cart = document.querySelector(".item-count")

let a = 0;
plus.addEventListener("click", ()=>{
    a++;
    a= (a<10) ? a : a;
    cart.innerHTML = a;

    
})