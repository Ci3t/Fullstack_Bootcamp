import logo from './logo.svg';
import './App.css';
import useFetch from './jsx/useFetch';
import { useState } from 'react';



function App() {
  const { data, loading, error } = useFetch('https://api.chucknorris.io/jokes/random');

  if (loading) return <h1>Loading ...</h1>
  if (error) console.log(error);
  
// console.log();
console.log(loading);
  return (
    <div className="App">
      <p>{data && data.value}</p>
    </div>
  );
}

export default App;
