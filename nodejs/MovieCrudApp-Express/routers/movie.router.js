
import {Router} from 'express'
import { getMovie,postMovie,deleteMovie,updateMovie,getMovieById } from '../controller/movies.js';
export const movieRouter = Router()



movieRouter.get('/',getMovie);
movieRouter.post('/',postMovie);
movieRouter.delete('/:id',deleteMovie);
movieRouter.patch('/:id',updateMovie);
movieRouter.get('/:id',getMovieById);

