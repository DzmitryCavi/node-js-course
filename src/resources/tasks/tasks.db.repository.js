const Task = require('./tasks.model');

const getByBoardId = async boardId => await Task.find({ boardId });

const getByTaskIdAndBoardId = async (boardId, taskId) =>
  await Task.findOne({ boardId, _id: taskId });

const create = async data => await Task(data).save();

const update = async (boardId, taskId, data) =>
  await Task.findOneAndUpdate({ boardId, _id: taskId }, data, { new: true });

const deleteTaskById = async (boardId, taskId) =>
  await Task.findOneAndDelete({ boardId, _id: taskId });

module.exports = {
  getByBoardId,
  getByTaskIdAndBoardId,
  update,
  deleteTaskById,
  create
};
