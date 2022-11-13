import logo from './logo.svg';
import './App.css';
import Joke from './jsx/Joke';
import { useEffect, useState } from 'react';



function App() {
 const [show,setShow]= useState(false)



  return (
    <div className="App">
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        toggle
      </button>
      {show && <Joke />}
    </div>
  );
}

export default App;
