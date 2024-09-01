import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import  careersModel from '../models/careers_model.js'



//create event
export const createCareers = async(req, res, next) => {
    console.log('careers real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }

    if (!req.body.jobTitle || !req.body.jobDate) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const newCareers = new careersModel({
      ...req.body
      
    });
    try {
      const savedCareers = await newCareers.save();
      res.status(201).json({savedCareers,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get careers
  export const getCareers=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const careers = await careersModel.find({
        ...(req.query.jobTitle && { title: req.query.jobTitle }),
        ...(req.query.jobDate && { date: req.query.jobDate }),
        ...(req.query.jobLocation && { location: req.query.jobLocation }),
        ...(req.query.searchTerm && {
          $or: [
            { jobTitle: { $regex: req.query.searchTerm, $options: 'i' } },
            { jobDate: { $regex: req.query.searchTerm, $options: 'i' } },
            { jobLocation: { $regex: req.query.searchTerm, $options: 'i' } },
          ],
        }),
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      res.status(200).json({
        careers,
      });
    } catch (error) {
      next(error);
    }
  }


//Delete ExamNews
  export const deleteCareers = async (req, res, next) => {
    console.log('enter delete')
    try {
      const careers = await careersModel.findById(req.params.careersId);
      if (!careers) {
        return next(errorHandler(404, 'event not found'));
      }
      // if (event.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await careersModel.findByIdAndDelete(req.params.careersId);
      res.status(200).json({message:'event has been deleted'});
    } catch (error) {
      next(error);
    }
  };