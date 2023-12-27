import express from 'express';
import * as signupCtrl from '../controller/signup-controller';
import signupSchema from '../validations/signup-schema';
import validate from '../middleware/validator';



const router = express.Router();

router.post('/',validate(signupSchema), signupCtrl.signup);

export default router;
