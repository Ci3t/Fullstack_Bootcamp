import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



let movieParse = JSON.parse(
    fs.readFileSync(`./db/movies.json`)
)

export const getMovie = (req,res)=>{
    try{

        fs.readFile(`./db/movies.json`,'utf8', (err,data)=>{
            if (err){
               
                res.send('Invalid File')
                
            }else{
                res.send(JSON.parse(data))
            }
        }) 
    }catch(err){
        res.send('INVALID')
    }

   return;
}
export const postMovie = (req,res)=>{
    const movie = {...req.body,id:uuidv4()}
  
    movieParse.push(movie)
    fs.writeFile('./db/movies.json',JSON.stringify(movieParse),err=>{
        res.status(201).send(movie)
    })

}
export const deleteMovie = (req,res)=>{

    const {id} = req.params;
    movieParse = movieParse.filter(movie => {return movie.id !== id})

    fs.writeFile('./db/movies.json',JSON.stringify(movieParse),err=>{
        res.status(204).send('DELETED')
    })

}
export const getMovieById = (req,res)=>{

    const {id} = req.params;
    let movieA = movieParse.find(movie => {return movie.id === id})

    res.status(200).send(movieA)

}

export const updateMovie = (req,res)=>{

    const {id} = req.params;
    const movie = {...req.body}
    let movieA = movieParse.find(movie => {return movie.id === id})
    
  

    if(movie.name) movieA.name = movie.name;
    if(movie.released) movieA.released = movie.released;

    console.log(movieParse);

    // movieParse = {movie,movieA}
    fs.writeFile('./db/movies.json',JSON.stringify(movieParse),err=>{
        res.status(200).send(movieParse)
    })

}