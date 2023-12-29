import express from 'express';
import * as userCtrl from '../controller/user-controller';
import { Roles } from '../util/roles';
import { authorizeByRole } from '../middleware/authorization';


const router = express.Router();


router.get('/getAllUser', authorizeByRole([Roles.ADMIN]), userCtrl.getAll);
router.get('searchAll', authorizeByRole(Roles.ALL), userCtrl.searchAll);
router.get('/user/:id', authorizeByRole(Roles.ALL), userCtrl.getById);
router.get('/user/:id/roles', authorizeByRole(Roles.ADMIN), userCtrl.getRole);
router.put('/update/:id', authorizeByRole(Roles.ALL), userCtrl.update);
router.delete('/delete/:id', authorizeByRole([Roles.ADMIN]), userCtrl.remove);

export default router;
