import express from 'express';
import * as roleCtrl from '../controller/role-controller';
const router = express.Router();


router.get('/getAll', roleCtrl.getAll);
router.get('/:id', roleCtrl.getById);
router.post('/saveRole', roleCtrl.save);

export default router;