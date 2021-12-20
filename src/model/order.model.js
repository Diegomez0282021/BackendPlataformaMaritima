import { Schema, model, mongoose } from 'mongoose';
const dat = new Date();
const current=new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
const orderSchema = new Schema({
  nombre: { type: String },
  descripcion: { type: String },
  ports: {
    idPortDeparture: { type: Schema.Types.ObjectId, ref: 'SeaPort' },
    idPortDestination: { type: Schema.Types.ObjectId, ref: 'SeaPort' },
  },


  idUser: { type: Schema.Types.ObjectId, ref: 'User' },

  stateOrder: {
    state: { type: String, default: 'Pendiente' },
    date: { type: Date, default: dat },
  },
  product: {
    Weight: Number,
    Hight: Number,
    Width: Number,
    Long: Number,
  },
  invoice: {
    amount: { type: Number, default: 1 },
    Date: { type: Date, default: dat },
    idValueConfig: { type: Schema.Types.ObjectId, ref: 'ConfigValues' },
  },
  Date: { type: String, default: date },
  state: { type: Boolean, default: true },
});

export default model('Order', orderSchema);
