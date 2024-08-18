import express from 'express';
const router = express.Router();
import path from 'path';
import bodyParser from 'body-parser';
// import { verifyToken } from '../utils/verifyUser.js';
import {createExamNews, getExamNews, deleteExamNews} from '../controllers/examNews_controller.js'
import { errorHandler } from '../utils/errorHandler.js';

//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())




router.post('/createExamNews',upload.single('img'), createExamNews)
router.get('/getExamNews', getExamNews)
router.delete('/deleteExamNews/:eventId', deleteExamNews)
// router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;