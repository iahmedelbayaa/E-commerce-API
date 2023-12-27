import express from 'express';
import * as userCtrl from '../controller/user-controller';
const router = express.Router();
import * as authorization from '../middleware/authorization';
import {Roles} from '../util/roles';


router.get(
  '/getAllUser',
  authorization.authorizeByRole([Roles.ADMIN]),
  userCtrl.getAll
);
router.get(
  '/user/:id',
  authorization.authorizeByRole(Roles.ALL),
  userCtrl.getById
);
router.put(
  '/update/:id',
  authorization.authorizeByRole(Roles.ALL),
  userCtrl.update
);
router.delete(
  '/delete/:id',
  authorization.authorizeByRole([Roles.ADMIN]),
  userCtrl.remove
);

export default router;