import {Router} from 'express'
import { productRoute } from './product.router.js'

export const indexRoute = Router()

indexRoute.use('/api',productRoute)