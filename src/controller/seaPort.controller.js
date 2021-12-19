import seaPort from './../model/seaPort.model';

// const index = async (req, res) => {
//   try {
//     const data = await seaPort.find({})
//       .populate('category_id')
//       .populate('features.lot_id');
//     return res.json({ status: true, items: data });
//   } catch (ex) {
//     return res.json({ status: false, errors: ex.message });
//   }
// };

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new seaPort(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await seaPort.findById(params.seaPort_id);
    //   .populate('category_id')
    //   .populate('features.lot_id');
    return res.json({ status: true, item: category });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await seaPort.findByIdAndUpdate(params.seaPort_id, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await seaPort.findByIdAndDelete(params.seaPort_id);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

export { save, edit, update, remove };
