import express from 'express'
import { indexRouter } from './routers/index.router.js'
import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
const app = express();
const PORT = 5000;
const HOST = '127.0.0.1';

app.use(express.json())
app.use(cors())

app.use('/',indexRouter)

app.listen(PORT,HOST,()=>{
    console.log(`Server Listening on port ${HOST}:${PORT}`);
})