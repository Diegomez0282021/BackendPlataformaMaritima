import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  ports:  {
    idPortDeparture: { type: Schema.Types.ObjectId, ref: 'SeaPort' },
    idPortDestination: { type: Schema.Types.ObjectId, ref: 'SeaPort' },
  },
  idUser:{ type: Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  stateOrder:{
    state: String,
    date: Date,
  },
  idValueConfig: {type: Schema.Types.ObjectId, ref: 'ConfigValues'},
  product:{
    Weight: Number,
    Hight: Number,
    Width: Number,
    Long: Number
  },
  invoice:{
      amount: Number,
      Date: Date
  },
  Date: Date,
  state: { type: Boolean, default: false },

});

export default model('Order', orderSchema);