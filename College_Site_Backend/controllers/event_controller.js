import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import eventModel from '../models/event_model.js'



//create event
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
      res.status(201).json({savedEvent,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get events
  export const getEvents=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const events = await eventModel.find({
        ...(req.query.title && { title: req.query.title }),
        ...(req.query.date && { date: req.query.date }),
        ...(req.query.location && { location: req.query.location }),
        ...(req.query.searchTerm && {
          $or: [
            { title: { $regex: req.query.searchTerm, $options: 'i' } },
            { date: { $regex: req.query.searchTerm, $options: 'i' } },
            { location: { $regex: req.query.searchTerm, $options: 'i' } },
          ],
        }),
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalEvents = await eventModel.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthEvents = await eventModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        events,
        totalEvents,
        lastMonthEvents,
      });
    } catch (error) {
      next(error);
    }
  }


//Delete Events
  export const deleteEvent = async (req, res, next) => {
    console.log('enter delete')
    try {
      const event = await eventModel.findById(req.params.eventId);
      if (!event) {
        return next(errorHandler(404, 'event not found'));
      }
      // if (event.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await eventModel.findByIdAndDelete(req.params.eventId);
      res.status(200).json({message:'event has been deleted'});
    } catch (error) {
      next(error);
    }
  };

//update events


