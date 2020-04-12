const tasksRepo = require('./tasks.memory.repository');

const getByBoardId = async boardId => {
  const task = await tasksRepo.getByBoardId(boardId);
  return task;
};
const getByTaskIdAndBoardId = async (boardId, taskId) => {
  const task = await tasksRepo.getByTaskIdAndBoardId(boardId, taskId);
  return task;
};
const create = async data => {
  const task = await tasksRepo.create(data);
  return task;
};
const update = async (boardId, taskId, data) => {
  const task = await tasksRepo.update(boardId, taskId, data);
  return task;
};
const deleteTaskById = async (boardId, taskId) => {
  const task = await tasksRepo.deleteTaskById(boardId, taskId);
  return task;
};

module.exports = {
  getByBoardId,
  getByTaskIdAndBoardId,
  update,
  deleteTaskById,
  create
};
