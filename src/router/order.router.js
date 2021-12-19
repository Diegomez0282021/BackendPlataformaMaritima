import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
  findByUser,
} from './../controller/order.controller';

const app = Router();

app.get('/order', index);
app.post('/order', save);
app.get('/order/:orderID', edit);

app.post('/order/update',update)
app.delete('/order/remove',remove)

app.get('/orderByUser/:userID', findByUser);


export default app;
