import OrderModel from './../model/order.model';

const index = async (req, res) => {
  try {
    const data = await OrderModel.find({})
      .populate('ports.idPortDeparture')
      .populate('ports.idPortDestination')
      .populate("idUser")
      .populate("idValueConfig");
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
      .populate("idUser")
      .populate("idValueConfig");
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

export { index, save, edit, update, remove };
