import ConfigValueModel from './../model/configValues.model';

const found = async (req, res) => {
  try {
    //const data = await ConfigValueModel.find({});
    const data = await ConfigValueModel.findOne({ state: true }).exec();
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new ConfigValueModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    await ConfigValueModel.updateMany({state:true}, { $set: { state: false } });
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};


export { found, save, update };