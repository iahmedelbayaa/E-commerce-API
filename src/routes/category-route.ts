import express from 'express';
const router = express.Router();
import * as categoryController from '../controller/category-controller';
import {verifyToken} from '../middleware/authentication';
import { authorizeByRole } from '../middleware/authorization';
import  {categorySchema}  from '../validations/category-schema';
import validator from '../middleware/validator';
import {Roles} from '../util/roles';

router.use(verifyToken);


router.get(
  '/',
  authorizeByRole([Roles.ADMIN]),
  categoryController.getAll
);
router.get(
  '/searchAll',
  authorizeByRole(Roles.ALL),
  categoryController.searchOne
);
router.get(
  '/:id',
  authorizeByRole([Roles.ADMIN, Roles.SELLER]),
  categoryController.getById
);
router.get(
  '/:id/products',
  authorizeByRole(Roles.ALL),
  categoryController.getCategoryProducts
);

router.post(
  '/',
  authorizeByRole([Roles.ADMIN, Roles.SELLER]),
  validator(categorySchema),
  categoryController.save
);

export default router;