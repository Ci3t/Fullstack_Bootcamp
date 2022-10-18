const h1 = document.querySelector("h1");
const buttonMinus = document.querySelector(".minus");
const buttonPlus = document.querySelector(".plus");




buttonMinus.addEventListener('click',()=>{
    let original = window.getComputedStyle(h1).getPropertyValue("font-size")
    let num = parseInt(original);
    e = h1.style.fontSize = (num-2)+'px';
    console.log(e);
   
    
    
  
})
buttonPlus.addEventListener('click',()=>{
        let original = window.getComputedStyle(h1).getPropertyValue("font-size")
        let num = parseInt(original);
       h1.style.fontSize = (num+2)+'px';
      
})



// buttonMinus.addEventListener("click", event);