import { useState,useEffect } from 'react';
import './App.css';



function App() {
  const [favoriteColor,setFavoriteColor] = useState('red')

  useEffect(()=>{
    setTimeout(() => {
      setFavoriteColor('blue')
    }, 2000);
  })

  return (
    <div className="App">
      <header className="App-header">
     
      <h1>my favorite Color is {favoriteColor}</h1>
     
      </header>
    </div>
  );
}

export default App;
