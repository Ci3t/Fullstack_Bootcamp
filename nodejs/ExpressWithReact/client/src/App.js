import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";





function App() {
 
  const [weather,setWeather] = useState({})
  const [city,setCity] = useState('')
  const [input,setInput] = useState('')

  useEffect(()=>{
    
    const getWeather = async ()=>{

      const {data} = await axios.get(`http://localhost:5000/weather?q=${city}`);
      console.log(data);
      setWeather(data)
  
    }
    getWeather()
  },[])

  console.log(city);
  return (
    <div>
      <label> Enter City
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} type={'text'}/>
        <button onClick={()=>{setCity(input)}} >Submit</button>
      </label>
      { weather.location &&
      <> 
     <p>Country: {weather.location.country}</p>
     <p> City : {weather.location.name}</p>
     <p>region :{weather.location.region}</p>
     <p> Id: {weather.location.tz_id}</p>
     <p> Lon: {weather.location.lon}</p>
     <p>Local Time : {weather.location.localtime}</p>
      </>
     }
     {weather.current && 
     <>
     <p>Weather Condition: {weather.current.condition.text}</p>
     <p>Gust Speed : {weather.current.gust_mph}</p>
    
     </>
}
    </div>
  );
}

export default App;
