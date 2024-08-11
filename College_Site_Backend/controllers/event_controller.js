import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import eventModel from '../models/event_model.js'




export const createEvent = async(req, res, next) => {
    console.log('event real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
  

    if (!req.body.title || !req.body.location || !req.body.date || !req.body.time) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const newEvent = new eventModel({
      ...req.body,
      img:req.file.filename,
      
    });
    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent).message('successfully created');
    } catch (error) {
      next(error);
    }
  };
  





  export const getEvents=async(req,res)=>{
  try{
    const data=await eventModel.find({})
    res.status(200).send(data).message('successfully get')
  }catch(e){
    next(errorHandler(500, 'Server Error',e))
  }
  }