import { errorHandler } from "../utils/errorHandler";

export const createEvent = async (req, res, next) => {
    // if (!req.user.isAdmin) {
    //   return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
    if (!req.body.title || !req.body.location || !req.body.date || !req.body.time) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
    const newPost = new Post({
      ...req.body,
    });
    try {
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      next(error);
    }
  };
  