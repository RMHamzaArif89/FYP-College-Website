import express from 'express';
const router = express.Router();
import path from 'path';
import bodyParser from 'body-parser';
// import { verifyToken } from '../utils/verifyUser.js';
import {createCareers, getCareers, deleteCareers} from '../controllers/careers_controller.js'
import { errorHandler } from '../utils/errorHandler.js';

//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())




router.post('/createCareers', createCareers)
router.get('/getCareers', getCareers)
router.delete('/deleteCareers/:careersId', deleteCareers)
// router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;