import userRouter from './routes/user-router';
import roleRouter from './routes/role-route';
import signupRouter from './routes/signup-route';
import loginRouter from './routes/login-route';
import productRoute from './routes/product-route';
import userProductRoute from './routes/user-product-route';
import cartRoute from './routes/cart-route';
import cartItemRoute from './routes/cart-item-route';
import orderRoute from './routes/order-route';
import categoryRoute from './routes/category-route';
import { Router } from 'express';

const router = Router();

router.use('user', userRouter);
router.use('role', roleRouter);
router.use('signup', signupRouter);
router.use('login', loginRouter);
router.use('product', productRoute);
router.use('userProduct', userProductRoute);
router.use('/api/v1', cartRoute);
router.use('cart', cartItemRoute);
router.use('order', orderRoute);
router.use('category', categoryRoute);

export default router;