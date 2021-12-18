import { Schema, model } from 'mongoose';

const configValueSchema = new Schema({
  value: Number,
  date: Date,
  state: { type: Boolean, default: true },
});

export default model('ConfigValue', configValueSchema);