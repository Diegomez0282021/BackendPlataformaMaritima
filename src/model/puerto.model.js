import { Schema, model } from 'mongoose';

const puertoSchema = new Schema({
  name: { type: String, required: true },
  longitud: { type: Number },
  latitud: { type: Number },
  state: { type: Boolean, default: true },
});

export default model('SeaPort', puertoSchema);
