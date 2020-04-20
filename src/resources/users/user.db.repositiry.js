const User = require('./user.model');

const getAll = async () => await User.find({});

const getById = async id => await User.findById(id);

const create = async data => await User(data).save();

const update = async (id, data) =>
  await User.findByIdAndUpdate(id, data, { new: true });

const deleteById = async id => await User.findOneAndDelete({ _id: id });

module.exports = { getAll, getById, update, deleteById, create };
