import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/sequelize-config';
import * as association from './config/association-config';
import userRouter from './routes/user-router'
import roleRouter from './routes/role-route'
import signupRouter from './routes/signup-route'
import loginRouter from './routes/login-route'
import productRoute from './routes/product-route';
import userProductRoute from './routes/user-product-route';
import cartRoute from './routes/cart-route';
import cartItemRoute from './routes/cart-item-route';
import orderRoute from './routes/order-route';
import categoryRoute from './routes/category-route';




const app = express();
dotenv.config();

const PORT = process.env.PORT;



app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api/v1', userRouter);
app.use('/api/v1', roleRouter);
app.use('/api/v1', signupRouter);
app.use('/api/v1', loginRouter);
app.use('/api/v1', productRoute);
app.use('/api/v1', userProductRoute);
app.use('/api/v1', cartRoute);
app.use('/api/v1', cartItemRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', categoryRoute);







sequelize.sync();
association.create();


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});