import logo from './logo.svg';
import './App.css';
import {Map} from './jsx/Map';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Display from './jsx/Display';
import Input from './jsx/Input';




function App() {
  const [map,setMap] = useState(null)
  const [searchInput,setSearchInput] = useState(null)
  const [valueFilter,setValueFilter]= useState([])


  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get('https://randomuser.me/api/?results=10')
      
      const data = await response.data
      
     const organizedData = data.results.map(avatar=>{ return {
  
      first: avatar.name.first,
      last: avatar.name.last,
      title: avatar.name.title,
      picture: avatar.picture.large,
    }})
   
    setMap(organizedData)
      // data.results.map(avatar=>{
      //   console.log(avatar);
        
      //   setMap(prevAvatar=>{

      //     return {
      //       ...prevAvatar,
      //       first: avatar.name.first,
      //       last: avatar.name.last,
      //       title: avatar.name.title,
      //       picture: avatar.picture.thumbnail,
      //     }
          
  
      //   })
      // })
      
      
  }
  fetchData()
},[searchInput])

useEffect(()=>{
  const inputCheck =(value)=>{
    setSearchInput(value)
   let fi=  map.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput)})
      setValueFilter(fi)
      
  }
},[searchInput])



  return (
    <div className="App">
      
     {/* <Map /> */}
     {/* <Display mapped={map}/>
     <Display mapped={map}/>
     <Display mapped={map}/> */}
     <input onChange={(e)=>{
      inputCheck(e.target.value)
      
     }} type='text'/>
     <Input  mapped={map}/>
     <div className='container-avatar'>

    {map&& map.map(avatar=><Display mapped={avatar}/>) }
    <div></div>
     </div>
    </div>
  );
}

export default App;
