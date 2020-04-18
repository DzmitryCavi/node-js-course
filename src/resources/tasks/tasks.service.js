const taskDB = require('./tasks.db.repository');

const getByBoardId = boardId => taskDB.getByBoardId(boardId);
const getByTaskIdAndBoardId = (boardId, taskId) =>
  taskDB.getByTaskIdAndBoardId(boardId, taskId);
const create = data => taskDB.create(data);
const update = (boardId, taskId, data) => taskDB.update(boardId, taskId, data);
const deleteTaskById = (boardId, taskId) =>
  taskDB.deleteTaskById(boardId, taskId);

module.exports = {
  getByBoardId,
  getByTaskIdAndBoardId,
  update,
  deleteTaskById,
  create
};
