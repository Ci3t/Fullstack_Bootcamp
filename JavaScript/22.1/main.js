const submit = document.querySelector('input[type="submit"]')
const firstName = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')
const age = document.querySelector('input[type="number"]')
const input = document.querySelectorAll('input')
const msg = document.querySelector('.msg')
const submitBtn = document.querySelector('.submit')
const changeBtn = document.querySelector('.change')
const form1 = document.querySelector('#form')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p = document.querySelector('p')







input.forEach(e=>{
    e.addEventListener('input',function form(el) {
        
     
       
       p1.textContent = firstName.value
       p2.textContent = email.value
       p3.textContent = age.value
        
        submit.addEventListener('click',(e)=>{
            if(submit){
                e.preventDefault()
                
                msg.classList.add('show')
                
            }
        })
       

       

        
    })
    
})
submitBtn.addEventListener('click',(e)=>{
   form1.submit()
   form1.textContent = 'congratulations you successfully sent this form'
   msg.classList.remove('show')
   e.preventDefault()
})
changeBtn.addEventListener('click',(e)=>{
    msg.classList.remove('show')
})


