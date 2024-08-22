import express from 'express';
const router = express.Router();
import path from 'path';
import bodyParser from 'body-parser';
// import { verifyToken } from '../utils/verifyUser.js';
import {createUserContact, getUserContact, deleteUserContact} from '../controllers/contact_controller.js'
import { errorHandler } from '../utils/errorHandler.js';

//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())




router.post('/createUserContact', createUserContact)
router.get('/getUserContact', getUserContact)
router.delete('/deleteUserContact/:userContactId', deleteUserContact)
// router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;