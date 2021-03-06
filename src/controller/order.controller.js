import OrderModel from './../model/order.model';
const current=new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
console.log(date)

const index = async (req, res) => {
  try {
    const data = await OrderModel.find({})
      .populate('ports.idPortDeparture')
      .populate('ports.idPortDestination')
      .populate('idUser')
      .populate('invoice.idValueConfig');
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const indexDate = async (req, res) => {
  try {
    const data = await OrderModel.find({Date: date})
      .populate('ports.idPortDeparture')
      .populate('ports.idPortDestination')
      .populate('idUser')
      .populate('invoice.idValueConfig');
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new OrderModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await OrderModel.findById(params.orderId)
      .populate('ports.idPortDeparture')
      .populate('ports.idPortDestination')
      .populate('idUser')
      .populate('idValueConfig');
    return res.json({ status: true, item: category });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

// const update = async (req, res) => {
//   try {
//     const params = req.params;
//     const body = req.body;
//     await OrderModel.findByIdAndUpdate(params.orderId, body);
//     return res.json({ status: true,params:params.orderID,body:body });
//   } catch (ex) {
//     return res.json({ status: false, errors: ex.message });
//   }
// };

const remove = async (req, res) => {
  try {
    let id=req.body.id;
    console.log(req.body)
    await OrderModel.findOneAndDelete({_id:id});
    return res.json({ status: true,body:req.body });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    let id=req.body;
    await OrderModel.updateOne({_id:id}, { $set: { state: true } });
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const updateStateOrder = async (req, res) => {
  try {
    let id=req.body.id;
    await OrderModel.updateOne({_id:id}, { $set: { "stateOrder.state":"Pendiente a envio"}  });
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const updateOrderState = async (req, res) => {
  try {
    let id=req.body.id;
    await OrderModel.updateOne({_id:id}, { $set: { "stateOrder.state":req.body.state}  });
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const findByUser = async (req, res) => {
  try {
    const params = req.params;
    const data = await OrderModel.find({ idUser: params.userID })
      .populate('ports.idPortDeparture')
      .populate('ports.idPortDestination')
      .populate('idUser')
      .populate('idValueConfig');
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};
export { index,indexDate, save, edit, update, remove, findByUser,updateStateOrder,updateOrderState };
