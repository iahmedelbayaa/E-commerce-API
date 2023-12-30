import express from 'express';
const router = express.Router();
import * as orderController from '../controller/order-controller';
import { verifyToken } from '../middleware/authentication';
import { authorizeByRole } from '../middleware/authorization';
import {Roles} from '../util/roles';

router.use(verifyToken);
router.use(authorizeByRole([Roles.CUSTOMER]));

router.get('/', orderController.getByUserId);
router.get('/info/:id', orderController.getOrderInfo);
router.get('/:id', orderController.getById);
router.get('/:id/users', orderController.getUser);

router.post('/', orderController.save);

export default router;
