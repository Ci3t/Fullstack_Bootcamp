const input = document.querySelector('input')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const img = document.querySelector('img')
const h2 = document.querySelector('h2')
const p = document.querySelectorAll('p')
let movieArr = []

const movieHTMLElements = (movie) => {
    const card = document.createElement('div');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    card.classList.add('card');
    img.src = movie.img;
    h2.textContent = movie.title;
    h5.textContent = movie.year;
    card.appendChild(img);
    div.appendChild(h4);
    div.appendChild(h5);
    card.appendChild(div);
    container.appendChild(card);
  };

const userFetchData = async (movie) => {

    let dataFetched = await fetch(`http://www.omdbapi.com/?apikey=f7d6942a&t=${movie}`)


    let data = await dataFetched.json()
    // console.log(dataFetched);
    // console.log(objFetched);

    // let fetchedDataObjKeys = {
    //     Poster: objFetched.Poster,
    //     Title: objFetched.Title,
    //     Genre:objFetched. Genre,
    //     Year: objFetched.Year,
    //     Plot: objFetched.Plot,
    //     Director: objFetched.Director,
    //     Actor: objFetched.Actors
    // }
    // console.log(fetchedDataObjKeys);

    const transformedData = { id: data.imdbID, img: data.Poster, title: data.Title, year: data.Year };
    
    return transformedData
}

// console.log(objPush);
const searchMovie = async () => {

    let fetched = await userFetchData(input.value)
    console.log(fetched);
    // const isNew = setMovieToArr(movie);
    // if (isNew) {
    //   setMovieCard(movie);
    // }


}
const setMovieToArr = (newMovie) => {
    const check = movieArr.some((movie) => movie.id === newMovie.id);
    if (!check) {
      movieArr.push(newMovie);
      return true;
    }
    return false;
  };



button.addEventListener('click', () => {
    // userFetchData()
    searchMovie()
    // makeDivsAddToHTML()
})