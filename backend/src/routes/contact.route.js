import express from 'express';
import * as contactController from '../controllers/contact.controller';
import { userAuth} from '../middlewares/auth.middleware';

const contactRoute = express.Router();
//api for add profile
contactRoute.post('/:profileId',userAuth, contactController.createContact);
export default contactRoute;