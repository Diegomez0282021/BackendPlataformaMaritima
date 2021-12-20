import { Router } from 'express';
import { save, found} from './../controller/puerto.controller';
// import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/puerto', found);
// app.get('/puerto/:puertoId', edit);
app.post('/puerto',save);

export default app;
