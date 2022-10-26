// Let's do a simple ajax call with fetch using this URL
// “https://api.jokes.one/jod”.
// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself.

const button = document.querySelector('button')
const p = document.querySelector('p')
const h1 = document.querySelector('h1')


button.addEventListener('click', () => {

    fetch('https://api.jokes.one/jod').then((res) => {

        if (!res.ok) {
            throw new Error(`Something wrong ${res.status}`)
        } else {

            res.json().then(data => {
                //   for(let i in data){
                //     console.log(contents);
                //   }
                h1.textContent = data.contents.jokes[0].joke.title
                p.textContent = data.contents.jokes[0].joke.text
            });
        }



    })
        .catch((err) => console.log('OPSSSSSS!! ' + err))
})