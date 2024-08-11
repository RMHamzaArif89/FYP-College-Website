import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser'

import cookieParser from 'cookie-parser';
import path from 'path';
//routes
import events_Routes from './routes/event_route.js'


const app=express()

var corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))

app.use(express.static('upload'))


//this is middleWare use to encode the form&body request value //example req.body from form
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())


//routes
app.use('/api/events', events_Routes);
app.post('/events',(req,res)=>{
  console.log('eventspost')
})
app.get('/ok',async(req,res)=>{
  console.log('enter')
  return res.status(200)
})



//require the db connection
import ('./db/Connection.js')

app.listen(5001,()=>{
    console.log('port is listening')
})
