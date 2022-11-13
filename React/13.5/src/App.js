import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';



function App() {

  const inputEl = useRef(null)
  useEffect(()=>{
    inputEl.current.focus();
  })
  return (
    <div className="App">
      
      <form>
        <label>FirstName: </label>
        <input ref={inputEl} type='text'/>
      </form>
    </div>
  );
}

export default App;
