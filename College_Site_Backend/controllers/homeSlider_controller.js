import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import homeSliderModel from "../models/homeSlider_model.js";



//create event
export const createHomeSlider = async(req, res, next) => {
    console.log('event real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
  

    if (!req.file.filename) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const homeSlider = new homeSliderModel({
      ...req.body,
      img:req.file.filename,
      
    });
    try {
      const savedHomeSlider = await homeSlider.save();
      res.status(201).json({savedHomeSlider,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get homeSlider
  export const getHomeSlider=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const homeSlider = await homeSliderModel.find({
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalEvents = await homeSliderModel.countDocuments();
  

  
      res.status(200).json({
        homeSlider,
      
      });
    } catch (error) {
      next(error);
    }
  }


//Delete Events
  export const deleteHomeSlider = async (req, res, next) => {
    console.log('enter delete')
    try {
      const homeSlider = await homeSliderModel.findById(req.params.homeSliderId);
      if (!homeSlider) {
        return next(errorHandler(404, 'homeSlider not found'));
      }
      // if (homeSlider.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await homeSliderModel.findByIdAndDelete(req.params.homeSliderId);
      res.status(200).json({message:'homeSlider has been deleted'});
    } catch (error) {
      next(error);
    }
  };

//update homeSlider


