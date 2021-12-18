import PuertoModel from './../model/puerto.model';

const found = async (req, res) => {
  try {
    const data = await PuertoModel.find({});
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

// const edit = async (req, res) => {
//   try {
//     const params = req.params;
//     const category = await PuertoModel.findById(params.puertoId)      
//     return res.json({ status: true, item: category });
//   } catch (ex) {
//     return res.json({ status: false, errors: ex.message });
//   }
// };

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new PuertoModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

export { found, save };
