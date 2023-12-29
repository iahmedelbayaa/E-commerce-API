import express from 'express';
const router = express.Router();
import * as categoryController from '../controller/category-controller';
import * as authentication from '../middleware/authentication';
import * as authorization from '../middleware/authorization';
import  {categorySchema}  from '../validations/categorySchema';
import validator from '../middleware/validator';
import {Roles} from '../util/roles';

router.use(authentication.verifyToken);


router.get(
  '/',
  authorization.authorizeByRole([Roles.ADMIN]),
  categoryController.getAll
);
router.get(
  '/searchAll',
  authorization.authorizeByRole(Roles.ALL),
  categoryController.searchOne
);
router.get(
  '/:id',
  authorization.authorizeByRole([Roles.ADMIN, Roles.SELLER]),
  categoryController.getById
);
router.get(
  '/:id/products',
  authorization.authorizeByRole(Roles.ALL),
  categoryController.getCategoryProducts
);

router.post(
  '/',
  authorization.authorizeByRole([Roles.ADMIN, Roles.SELLER]),
  validator(categorySchema),
  categoryController.save
);

export default router;