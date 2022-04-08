import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,loginValidator} from '../validators/user.validator';


const userRoute = express.Router();

//route to create a new user
userRoute.post('/register', newUserValidator, userController.newUser);
//route to login a new user
userRoute.post('/login',loginValidator,  userController.login);

export default userRoute;

