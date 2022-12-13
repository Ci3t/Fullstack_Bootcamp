import express from 'express'
import {indexRoute} from './Routers/index.router.js'
import './Mongoose/mongoose.connect.js'

const app = express()

const PORT = 5000;

app.use(express.json())
app.use('/',indexRoute)

app.get('/',(req,res)=>{
    res.send('Products HomePage')
})

app.listen(PORT,()=>{
    console.log(`Server Online at port ${PORT}`);
})