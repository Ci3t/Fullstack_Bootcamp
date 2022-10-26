//https://api.github.com/users/{var}

const button = document.querySelector('button');
const input = document.querySelector('input');
const container = document.querySelector('.container');
const movieArr = [];


const setMovieCard = (movieObj) => {
  const card = document.createElement('div');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');
  card.classList.add('card');
  img.src = movieObj.img;
  h4.textContent = movieObj.title;
  h5.textContent = movieObj.year;
  card.appendChild(img);
  div.appendChild(h4);
  div.appendChild(h5);
  card.appendChild(div);
  container.appendChild(card);
};


const userFetchData = async (movie) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=f7d6942a&t=${movie}
  `);
  //   const { public_repos, avatar_url, login } = await response.json();
  const data = await response.json();
  //   console.log('data → ', data);
  const transformedData = { id: data.imdbID, img: data.Poster, title: data.Title, year: data.Year };
  //   console.log('transformedData → ', transformedData);
  return transformedData;
};


const searchMovie = async () => {
  if (input.value !== '') {
    const movie = await userFetchData(input.value); //! async
    const isNew = setMovieToArr(movie);
    if (isNew) {
      setMovieCard(movie);
    }
  }
};


const setMovieToArr = (newMovie) => {
  const check = movieArr.some((movie) => movie.id === newMovie.id);
  if (!check) {
    movieArr.push(newMovie);
    return true;
  }
  return false;
};


const addEvents = () => {
  button.addEventListener('click', searchMovie);
  input.addEventListener('keyup', inputHandler);
};

const inputHandler = (e) => {
  if (e.key === 'Enter') {
    searchMovie();
  }
};


const startApp = () => {
  addEvents();
};

startApp();

