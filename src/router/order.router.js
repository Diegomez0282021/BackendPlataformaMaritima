import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/order.controller';

const app = Router();

app.get('/order', index);
app.post('/order', save);
app.get('/order/:orderID', edit);
//app.put('/order/:orderID', update);
//app.delete('/order/:orderID', remove);
app.post('/order/update',update)
app.delete('/order/remove',remove)

export default app;
