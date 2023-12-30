import express from "express";
const router = express.Router();
import * as cartController from "../controller/cart-controller";
import { verifyToken } from '../middleware/authentication';
import { authorizeByRole } from '../middleware/authorization';
import {Roles} from "../util/roles";

router.use(verifyToken);
router.use(authorizeByRole([Roles.CUSTOMER]));

router.get("/info", cartController.getCartInfo);
router.delete("/clear", cartController.clear);

module.exports = router;