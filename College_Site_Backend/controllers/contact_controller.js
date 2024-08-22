import  express  from "express";
import { errorHandler } from "../utils/errorHandler.js";
import userContactModel from "../models/contact_model.js";



//create event
export const createUserContact = async(req, res, next) => {
    console.log('userContact real')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
    console.log(req.body.message)

    if (!req.body.email || !req.body.message) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }

    const newUserContact = new userContactModel({
      ...req.body
      
    });
    try {
      const savedUserContact = await newUserContact.save();
      res.status(201).json({savedUserContact,message:'Successfully created'});
    } catch (error) {
      next(error);
    }
  };
  




//Get userContact
  export const getUserContact=async(req,res,next)=>{
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const userContact = await userContactModel.find({
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
        userContact,
      });
    } catch (error) {
      next(error);
    }
  }


//Delete ExamNews
  export const deleteUserContact = async (req, res, next) => {
    console.log('enter delete')
    try {
      const userContact = await userContactModel.findById(req.params.userContactId);
      if (!userContact) {
        return next(errorHandler(404, 'user not found'));
      }
      // if (event.userId !== req.user.id && !req.user.isAdmin) {
      //   return next(
      //     errorHandler(403, 'You are not allowed to delete this comment')
      //   );
      // }
      await userContactModel.findByIdAndDelete(req.params.userContactId);
      res.status(200).json({message:'event has been deleted'});
    } catch (error) {
      next(error);
    }
  };
