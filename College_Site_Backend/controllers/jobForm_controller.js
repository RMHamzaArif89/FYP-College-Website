import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import jobFormModel from '../models/jobForm_model.js'



//create jobForm
export const createJobForm = async(req, res, next) => {
    console.log('jobForm real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
    // console.log(req.body)
  
    // if (!req.body.firstName || 
    //     !req.body.lastName || 
    //     !req.body.birthdate || 
    //     !req.body.country || 
    //     !req.body.city || 
    //     !req.body.zip || 
    //     !req.body.address || 
    //     !req.body.email || 
    //     !req.body.startDate) {
    //   return next(errorHandler(400, 'Please provide all required fields'));
    // }
    

    const newJobForm = new jobFormModel({
      ...req.body,
      resume: req.file ? req.file.path : null
      
    });
    try {
      const savedJobForm = await newJobForm.save();
      res.status(201).json({savedJobForm,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get jobForm
  export const getJobForm=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const jobForm = await jobFormModel.find({
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
  
      const totalEvents = await jobFormModel.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthEvents = await jobFormModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        jobForm,
        totalEvents,
        lastMonthEvents,
      });
    } catch (error) {
      next(error);
    }
  }


//Delete Events
  export const deleteJobForm = async (req, res, next) => {
    console.log('enter delete')
    try {
      const jobForm = await jobFormModel.findById(req.params.jobFormId);
      if (!jobForm) {
        return next(errorHandler(404, 'jobForm not found'));
      }
      // if (jobForm.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await jobFormModel.findByIdAndDelete(req.params.jobFormId);
      res.status(200).json({message:'jobForm has been deleted'});
    } catch (error) {
      next(error);
    }
  };
