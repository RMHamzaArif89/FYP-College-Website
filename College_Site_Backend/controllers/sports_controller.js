import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import sportsNewsModel from "../models/sports_model.js";



//create event
export const createSportsNews = async(req, res, next) => {
    console.log('event real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
  

    if (!req.body.title || !req.file.filename || !req.body.date) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const newSportsNews = new sportsNewsModel({
      ...req.body,
      img:req.file.filename,
      
    });
    try {
      const savedSportsNews = await newSportsNews.save();
      res.status(201).json({savedSportsNews,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get events
  export const getSportsNews=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const sportsNews = await sportsNewsModel.find({
        ...(req.query.title && { title: req.query.title }),
        ...(req.query.date && { date: req.query.date }),
        ...(req.query.searchTerm && {
          $or: [
            { title: { $regex: req.query.searchTerm, $options: 'i' } },
            { date: { $regex: req.query.searchTerm, $options: 'i' } },
           
          ],
        }),
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalEvents = await sportsNewsModel.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthEvents = await sportsNewsModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        sportsNews,
      
      });
    } catch (error) {
      next(error);
    }
  }


//Delete Events
  export const deleteSportsNews = async (req, res, next) => {
    console.log('enter delete')
    try {
      const sportsNews = await sportsNewsModel.findById(req.params.sportsNewsId);
      if (!sportsNews) {
        return next(errorHandler(404, 'sportsNews not found'));
      }
      // if (sportsNews.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await sportsNewsModel.findByIdAndDelete(req.params.eventId);
      res.status(200).json({message:'sportsNews has been deleted'});
    } catch (error) {
      next(error);
    }
  };

//update events


