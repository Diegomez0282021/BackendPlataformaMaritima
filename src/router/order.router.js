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
app.put('/order/:orderID', update);
app.delete('/order/:orderID', remove);
app.get('/orderByUser/:userID', findByUser);

export default app;
