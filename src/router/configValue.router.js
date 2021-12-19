import { Router } from 'express';
import { save, found,update } from './../controller/configValues.controller';

const app = Router();

app.get('/configValue', found);
app.post('/configValue', save);
app.post('/configValue/update',update)

export default app;