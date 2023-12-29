import express from 'express';
import * as productController from '../controller/product-controller';
import { verifyToken } from '../middleware/authentication';
const {authorizeByRole} = require('../middlewares/authorization');
import { productSchema } from '../validations/product-schema';
import { productUpdateSchema } from '../validations/product-update-schema';
import validator from '../middleware/validator';
import {Roles} from '../util/roles';

const router = express.Router();

router.use(verifyToken);

router.get(
  '/',
  authorizeByRole([Roles.ADMIN]),
  productController.getAll
);
router.get(
  '/search',
  authorizeByRole(Roles.ALL),
  productController.searchAll
);
router.get(
  '/:id',
  authorizeByRole([Roles.ADMIN, Roles.SELLER]),
  productController.getById
);
router.get('/:id/categories', productController.getCategoryInfo);

router.post(
  '/',
  authorizeByRole([Roles.ADMIN]),
  validator(productSchema),
  productController.create
);

router.put(
  '/',
  authorizeByRole([Roles.ADMIN]),
  validator(productUpdateSchema),
  productController.update
);

router.delete(
  '/:id',
  authorizeByRole([Roles.ADMIN]),
  productController.remove
);
