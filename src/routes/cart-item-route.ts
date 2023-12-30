import express from 'express';
const router = express.Router();
import * as cartItemController from '../controller/cart-item-controller';
import { verifyToken } from '../middleware/authentication';
import { authorizeByRole } from '../middleware/authorization';
import { Roles } from '../util/roles';
import { cartItemSchema } from '../validations/cart-item-schema';
import { cartItemDeletionSchema } from '../validations/cart-item-deletion-schema';
import validator from '../middleware/validator';

router.use(verifyToken);
router.use(authorizeByRole([Roles.CUSTOMER]));

router.post(
  '/cart-product/save',
  validator(cartItemSchema),
  cartItemController.save
);

router.put(
  '/cart-product/update',
  validator(cartItemSchema),
  cartItemController.update
);

router.delete(
  '/cart-product/delete',
  validator(cartItemDeletionSchema),
  cartItemController.deleteCartItem
);

export default router;