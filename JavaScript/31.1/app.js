
const container = document.querySelector('.container')
const ul = document.querySelector('#person')


let arrayObj = []
let objClear = {}
const getFetchData = async (data) => {
    let swapi = 'https://swapi.dev/api/people/'
    const fetched = await fetch(swapi)
    const fetchJson = await fetched.json()


    let swapi2 = 'https://swapi.dev/api/planets'
    const fetched2 = await fetch(swapi2)
    const fetchJson2 = await fetched2.json()

    // return fetchJson
    console.log(fetchJson.results);
    console.log(fetchJson2.results);

    
    
    for (let i = 0; i < fetchJson.results.length; i++) {
        let star;
        const li = document.createElement('li')
        const { name, height, hair_color } = fetchJson.results[i]
        
        // console.log(name);
        const span = document.createElement('span')
        
        let arr = []
   
      
        
        const span2 = document.querySelectorAll('span')

 
        for (let j = 0; j < fetchJson2.results.length; j++) {
            const { name, population } = fetchJson2.results[j]

            arr.push(`      ${name}  , ${population}`) 
     
            
        }
        li.textContent += `${name} ${height} ${hair_color}`
        // console.log(arr);
        ul.appendChild(li)
        li.appendChild(span)
        span2.forEach(e=>{
            span.innerText = arr[i]

        })
        console.log(arr);
        // console.log(li.textContent);
    }
    
   




}



async function start() {
    getFetchData()


}
start()