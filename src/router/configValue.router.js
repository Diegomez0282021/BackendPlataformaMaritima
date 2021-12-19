import { Router } from 'express';
import { save, found } from './../controller/configValues.controller';

const app = Router();

app.get('/configValue', found);
app.post('/configValue', save);

export default app;
