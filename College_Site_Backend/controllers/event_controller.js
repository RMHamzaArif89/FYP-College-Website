import  express  from "express";
import path from 'path'
import bodyParser from "body-parser";
import { errorHandler } from "../utils/errorHandler.js";
import eventModel from '../models/event_model.js'


export const createEvent = async (req, res, next) => {
    console.log('event')
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
    if (!req.body.title || !req.body.location || !req.body.date || !req.body.time) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
    const newEvent = new eventModel({
      ...req.body,
    });
    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      next(error);
    }
  };
  