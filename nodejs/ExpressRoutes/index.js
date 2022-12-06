import  express  from "express";
import bodyParser from 'body-parser';

import numbersRoutes from './routes/numbers.js'

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

// app.use('/users',usersRoutes)
app.use('/numbers',numbersRoutes)

app.get('/',(req,res)=> res.send('Hello HomePage'));


app.listen(PORT,()=> console.log(`Server Running on port http://localhost:${PORT}`))

