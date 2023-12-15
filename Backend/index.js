import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv  from 'dotenv'
import cookieParser from 'cookie-parser' 

import authRoute from './routes/auth.js';

dotenv.config()
const app=express();
const port =process.env.PORT || 5000;

const corsOptions= {
    origin:true
}

app.get('/', (req,res)=>{
    res.send('Api is working')
})

//database connection
mongoose.set('strictQuery', false)

const connectDB = async () =>{
    try {
        // await mongoose.connect(process.env.MONGO_URL,{
        //     useNewUrlParser: true,
        //     useUnifiedTopology:true
        // })
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongo db is coonected successfully!')
    } catch (error) {
        console.log(error)
    }
}
//midlleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions))

//routes for login and register
app.use('/api/v1/auth', authRoute)

app.listen(port, ()=>{
    connectDB();
    console.log('Server is running on port ' + port)
})