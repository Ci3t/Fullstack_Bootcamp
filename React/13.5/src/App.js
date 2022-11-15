import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';



function App() {

  const inputEl = useRef(null)
  const btnRef = useRef(null)
  useEffect(()=>{
    inputEl.current.focus();
 
    console.log(btnRef);
    // console.log(inputEl);
  })
  return (
    <div className="App">
      
      <form>
        <label>FirstName: </label>
        <input ref={inputEl} type='text'/>
        <img ref2={btnRef} src="./img/img.jpg"></img>
      </form>
    </div>
  );
}

export default App;
