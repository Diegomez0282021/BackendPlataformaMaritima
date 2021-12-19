import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import UserRouter from './router/user.router';
import PuertoRouter from './router/puerto.router';
import OrderRouter from './router/order.router';
import ConfigValuesRouter from './router/configValue.router';

dotenv.config();
const app = express();

const main = async () => {
  await mongoose.connect(process.env.URL_DB);
  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use('/api', UserRouter);
  app.use('/api', PuertoRouter);
  app.use('/api', OrderRouter);
  app.use('/api', ConfigValuesRouter);

  app.listen(process.env.PORT, () => {
    console.log(`app listening at port ${process.env.PORT}`);
  });
};

main().catch((err) => console.log(err));
