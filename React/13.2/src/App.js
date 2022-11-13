import { useState,useEffect } from 'react';
import './App.css';



function App(props) {
  const [box,setBox]=useState(true)

  useEffect(() => {

    let timer1 = setTimeout(() => setBox(true),1000);
    return () => {
      clearTimeout(timer1);
    };
      
  },[box]);
  useEffect(() => {

    let timer1 = setTimeout(() => setBox(false),4000);
    return () => {
      clearTimeout(timer1);
    };
      
  },[box]);

  


  return (
    <div className="App">
    
    {box && <div className='divslide' style={{width: "150px"}}></div>}
    {box && <div className='divslide' style={{width: "200px"}}></div>}
    {box && <div className='divslide'></div>}
        
     
     
    </div>
  );
}

export default App;
