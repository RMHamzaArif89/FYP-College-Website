import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import noticeBoardModel from "../models/noticeboard_model.js";



//create notice
export const createNotice = async(req, res, next) => {
    console.log('notice real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
  

    if (!req.body.title || !req.file.filename ) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const newNotice = new noticeBoardModel({
      ...req.body,
      img:req.file.filename,
      
    });
    try {
      const savedNotice = await newNotice.save();
      res.status(201).json({savedNotice,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get notice
  export const getNotice=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const notice = await noticeBoardModel.find({
        ...(req.query.title && { title: req.query.title }),
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
  
      const totalEvents = await noticeBoardModel.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthEvents = await noticeBoardModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        notice,
       
      });
    } catch (error) {
      next(error);
    }
  }


//Delete Events
  export const deleteNotice = async (req, res, next) => {
    console.log('enter delete')
    try {
      const notice = await noticeBoardModel.findById(req.params.noticeId);
      if (!notice) {
        return next(errorHandler(404, 'notice not found'));
      }
      // if (notice.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await noticeBoardModel.findByIdAndDelete(req.params.noticeId);
      res.status(200).json({message:'notice has been deleted'});
    } catch (error) {
      next(error);
    }
  };
