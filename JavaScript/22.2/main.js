const checkbox = document.querySelector('input[type="checkbox"]')

const div = document.createElement('div')
const img = document.createElement('img')



checkbox.addEventListener('click',()=>{
    if(checkbox.checked){
        
        img.src = '/Zero.Two.jpg'  
        img.width = "800" 
        div.appendChild(img)
        document.body.appendChild(div)
        
    }
    if(!checkbox.checked){
        img.src = ''
    }
})