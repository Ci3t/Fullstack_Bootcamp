
import {Router} from 'express'
import {weatherRouter} from './weather.router.js'
export const indexRouter = Router()



indexRouter.use('/weather',weatherRouter);