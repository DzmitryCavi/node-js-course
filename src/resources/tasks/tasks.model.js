const {
  getByBoardId,
  getByTaskIdAndBoardId,
  update,
  deleteTaskById,
  create
} = require('./tasks.memory.repository');

class Task {
  constructor() {}
  static async getByBoardId(boardId) {
    const tasks = await getByBoardId(boardId);
    return tasks;
  }

  static async getByTaskIdAndBoardId(boardId, taskId) {
    const task = await getByTaskIdAndBoardId(boardId, taskId);
    return task;
  }

  static async create(data) {
    const task = await create(data);
    return task;
  }

  static async update(boardId, taskId, data) {
    const task = await update(boardId, taskId, data);
    return task;
  }

  static async deleteTaskById(boardId, taskId) {
    const status = await deleteTaskById(boardId, taskId);
    return status;
  }
}

module.exports = Task;
