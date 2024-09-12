import express from 'express';
const router = express.Router();
import multer from 'multer';
import path from 'path'
import bodyParser from 'body-parser';
// import { verifyToken } from '../utils/verifyUser.js';
import {createJobForm, getJobForm, deleteJobForm} from '../controllers/jobForm_controller.js'
import { errorHandler } from '../utils/errorHandler.js';

//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())



// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/resumes'); // Path to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });



//for upload file
router.use(express.static('upload'))

router.post('/createJobForm',upload.single('resume'), createJobForm)
router.get('/getJobForm', getJobForm)
router.delete('/deleteJobForm/:jobFormId', deleteJobForm)
// router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;