import axios from 'axios'
import {useEffect,useState} from 'react'


function Joke() {
  const [joke,setJoke]= useState('')
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await axios.get('https://jservice.io/api/random')
      
      .then(data=>
        setJoke(data.data[0].question))
        .catch(err=>console.log(err))
    
    }



    fetchData()
  },[])
  return (
    <div>
      
      <p>{joke}</p>
    </div>
  )
}

export default Joke