
import {Router} from 'express'
import { getWeather,getWeatherById } from '../controller/weather.js';
export const weatherRouter = Router()



weatherRouter.get('/',getWeather);
weatherRouter.get('/:id',getWeatherById);

