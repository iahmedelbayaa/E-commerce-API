import express from 'express';
const router = express.Router();
import * as userProductController from '../controller/user-product-controller';
import { verifyToken } from '../middleware/authentication';
import { authorizeByRole } from '../middleware/authorization';
const { userProductSchema } = require('../validations/user-product-schema');
import validator from '../middleware/validator';
import {Roles} from '../util/roles';

router.use(verifyToken);

router.get(
  '/',
  authorizeByRole([Roles.ADMIN]),
  userProductController.getAll
);
router.get(
  '/products',
  authorizeByRole([Roles.SELLER]),
  userProductController.getProducts
);
router.get(
  '/:id',
  authorizeByRole([Roles.ADMIN]),
  userProductController.getAll
);
router.get(
  '/:userId/products',
  authorizeByRole([Roles.ADMIN]),
  userProductController.getAll
);
router.get(
  '/:productId/users',
  authorizeByRole([Roles.ADMIN]),
  userProductController.getAll
);

router.post(
  '/',
  authorizeByRole([Roles.SELLER]),
  validator(userProductSchema),
  userProductController.create
);

router.put(
  '/',
  authorizeByRole([Roles.SELLER]),
  validator(userProductSchema),
  userProductController.update
);

router.delete(
  '/:productId',
  authorizeByRole([Roles.SELLER]),
  userProductController.remove
);

export default router;
