
//https://api.github.com/user/{username}
// const h2 = document.querySelector('h2')
// const div = document.querySelector('div')
const cont = document.querySelector('#container')
const button = document.querySelector('button')
const text = document.querySelector('.text')
let input = document.querySelector('input').value
let input2 = document.querySelector('input')




button.addEventListener('click', function(e) {
    fetchUserAndAddToHTML()   
})

input2.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        fetchUserAndAddToHTML()
    }
})
// getGit()



const fetchUserAndAddToHTML = async()=>{
    try{
let getFetch = await fetch(`https://api.github.com/users/${input2.value}`)
let user = await getFetch.json()
console.log(user);
console.log(getFetch);


if(!getFetch.ok){
    console.log('Something is Wrong');
    text.textContent = 'Something is Wrong'
}

if(input2.value.length > 0){
   input2.value = '';
   text.textContent = ''

       let div = document.createElement('div')
       let h2 = document.createElement('h2')
       let a = document.createElement('a')
       let p = document.createElement('p')
       let img = document.createElement('img')
   cont.appendChild(div)
   div.appendChild(img)
   div.appendChild(h2)
   h2.appendChild(a)
   div.appendChild(p)
  
   img.src = user.avatar_url
   img.style.height = '100px'
   img.style.width = '100px'
   
   a.textContent = user.name
   a.href = user.html_url
   a.target = '_'
   
   p.textContent = user.public_repos
}
}catch(e){
    console.log(e.message);
}

}     
fetchUserAndAddToHTML()