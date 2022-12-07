import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



let weatherParse = JSON.parse(
    fs.readFileSync(`./db/weather.json`)
)

export const getWeather = async(req,res)=>{

    console.log(req.query);
    console.log(req.query.q);
    console.log(req.params);
    const city = req.params.q
    try{

      const weath =  await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',{
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          },
            params: {q: 'London'}
        })
        res.send(weath.data)
    }catch(err){
        res.status(200).send('INVALID')
    }

   return;
}

export const getWeatherById = (req,res)=>{

    const {id} = req.params;
    let weatherA = weatherParse.find(weather => {return weather.id === id})

    res.status(200).send(weatherA)

}


