import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import examNewsModel from "../models/examNews_model.js";



//create event
export const createExamNews = async(req, res, next) => {
    console.log('examNews real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
  

    if (!req.body.semeserName || !req.body.detail) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const newExamNews = new examNewsModel({
      ...req.body
      
    });
    try {
      const savedExamNews = await newExamNews.save();
      res.status(201).json({savedEvent,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get examNews
  export const getExamNews=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const examNews = await examNewsModel.find({
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
  
      res.status(200).json({
        examNews,
      });
    } catch (error) {
      next(error);
    }
  }


//Delete ExamNews
  export const deleteExamNews = async (req, res, next) => {
    console.log('enter delete')
    try {
      const examNews = await examNewsModel.findById(req.params.examNewsId);
      if (!examNews) {
        return next(errorHandler(404, 'event not found'));
      }
      // if (event.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await examNewsModel.findByIdAndDelete(req.params.examNewsId);
      res.status(200).json({message:'event has been deleted'});
    } catch (error) {
      next(error);
    }
  };

//update events

