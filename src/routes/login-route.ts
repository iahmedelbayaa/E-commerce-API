import express from 'express';
import * as signupCtrl from '../controller/login-controller';
import signInSchema from '../validations/login-schema';
import validate from '../middleware/validator';

const router = express.Router();

router.post('/login', validate(signInSchema), signupCtrl.login);


export default router;