
import {Router} from 'express'
import {movieRouter} from './movie.router.js'
export const indexRouter = Router()



indexRouter.use('/movies',movieRouter);