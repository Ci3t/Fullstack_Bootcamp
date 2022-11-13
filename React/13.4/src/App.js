import React,{useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Spinner from './jsx/Spinner';




function App() {
  const [timer,setTimer] = useState(true)
  const [data,setData] = useState(true)

useEffect(()=>{

let time =  setTimeout(() => {
  setTimer(false)
  

}, 2000);
// clearTimeoutime)
},[])
return (
    <div className="App">
  
     
      {timer && <Spinner />}
     

    </div>
  );
}

export default App;
