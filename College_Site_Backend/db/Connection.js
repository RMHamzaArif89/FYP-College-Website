import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.MONGO_CONN)
.then(()=>console.log('connection is established'))
.catch((err)=>console.log(err))