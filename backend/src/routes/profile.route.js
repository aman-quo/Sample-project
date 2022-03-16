import express from 'express';
import * as profileController from '../controllers/profile.controller';
import { profileValidator} from '../validators/profile.validator';
import { userAuth} from '../middlewares/auth.middleware';

const profileRoute = express.Router();
//api for add profile
profileRoute.post('/',userAuth, profileValidator, profileController.addProfile);
export default profileRoute;