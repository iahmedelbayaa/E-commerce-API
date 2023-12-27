import express from 'express';
import * as userCtrl from '../controller/user-controller';
const router = express.Router();


router.get('/getAllUser', userCtrl.getAll);
router.get('/user/:id', userCtrl.getById);
router.post('/saveUser', userCtrl.save);
router.put('/update/:id', userCtrl.update);
router.delete('/delete/:id', userCtrl.remove);

export default router;