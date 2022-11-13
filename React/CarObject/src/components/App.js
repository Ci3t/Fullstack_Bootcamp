import './App.css';
import Nav from './nav/Nav';
import { carMarket } from '../carsAgObj';
import { useState } from 'react';

function App() {
  const [changeText,setChangeText] = useState('Welcome to My Car Market')
  const clickToChange = (e)=>{
    setChangeText(prev=>prev=e.target.textContent

    )
    // console.log(e.target.textContent);
   
  }
  return (
    <div>
      
      <Nav click={clickToChange} departments={Object.keys(carMarket)} />
      <p>{changeText}</p>
    </div>
  );
}

export default App;
