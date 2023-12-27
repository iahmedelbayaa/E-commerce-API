import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/sequelize-config';
import * as association from './config/association-config';
import userRouter from './routes/user-router'
import roleRouter from './routes/role-route'




const app = express();
dotenv.config();

const PORT = process.env.PORT;



app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api/v1', userRouter);
app.use('/api/v1', roleRouter);





sequelize.sync();
association.create();


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});