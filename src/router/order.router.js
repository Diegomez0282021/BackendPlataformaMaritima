import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
  findByUser,
  updateStateOrder,
  updateOrderState
} from './../controller/order.controller';

const app = Router();

app.get('/order', index);
app.post('/order', save);
app.get('/order/:orderID', edit);

app.post('/order/update',update)
app.post('/order/updateState',updateStateOrder)
app.post('/order/updateOrders',updateOrderState)

app.delete('/order/remove',remove)

app.get('/orderByUser/:userID', findByUser);


export default app;
