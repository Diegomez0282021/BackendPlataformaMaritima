import { Router } from 'express';
import {
  //   index,
  save,
  edit,
  update,
  remove,
} from './../controller/seaPort.controller';

import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

// app.get('/product', authMiddleware, index);
app.post('/seaPort', authMiddleware, save);
app.get('/seaPort/:seaPort_id', authMiddleware, edit);
app.put('/seaPort/:seaPort_id', authMiddleware, update);
app.delete('/seaPort/:seaPort_id', authMiddleware, remove);

export default app;
