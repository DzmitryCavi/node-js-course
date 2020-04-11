const tasksRepo = require('./tasks.memory.repository');

const getByBoardId = boardId => tasksRepo.getByBoardId(boardId);
const getByTaskIdAndBoardId = (boardId, taskId) =>
  tasksRepo.getByTaskIdAndBoardId(boardId, taskId);
const create = task => tasksRepo.create(task);
const update = (boardId, taskId, data) =>
  tasksRepo.update(boardId, taskId, data);
const deleteTaskById = (boardId, taskId) =>
  tasksRepo.deleteTaskById(boardId, taskId);

module.exports = {
  getByBoardId,
  getByTaskIdAndBoardId,
  update,
  deleteTaskById,
  create
};
