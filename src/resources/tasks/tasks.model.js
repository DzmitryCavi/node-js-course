const { getByBoardId, getByTaskIdAndBoardId, update, deleteTaskById, create } = require('./tasks.memory.repository');

class Task {
  constructor() {}
    static getByBoardId(boardId){
        return new Promise(async resolve => {
            const tasks = await getByBoardId(boardId);
            resolve(tasks);
        })
    }

    static getByTaskIdAndBoardId(boardId, taskId){
        return new Promise(async resolve => {
            const task = await getByTaskIdAndBoardId(boardId, taskId);
            resolve(task);
        })
    }

    static create(data){
        return new Promise(async resolve => {
            const task = await create(data);
            resolve(task);
        })
    }

    static update(boardId, taskId, data){
        return new Promise(async resolve => {
            const task = await update(boardId, taskId, data);
            resolve(task);
        })
    }

    static deleteTaskById(boardId, taskId){
        return new Promise(async resolve => {
            const status = await deleteTaskById(boardId, taskId);
            resolve(status);
        })
    }
}

module.exports = Task;
