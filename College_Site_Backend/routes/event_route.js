import express from 'express';
const router = express.Router();
import path from 'path';
import bodyParser from 'body-parser';
import multer from 'multer';
// import { verifyToken } from '../utils/verifyUser.js';
import {createEvent, getEvents, deleteEvent} from '../controllers/event_controller.js'
import { errorHandler } from '../utils/errorHandler.js';

//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())



const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./upload")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    return cb(null,`${uniqueSuffix}-${file.originalname}`)
  }
})

const upload = multer({ storage:Storage })


//for upload file
router.use(express.static('upload'))

router.post('/createEvent',upload.single('img'), createEvent)
router.get('/getEvents', getEvents)
router.delete('/deleteEvent/:eventId', deleteEvent)
// router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;