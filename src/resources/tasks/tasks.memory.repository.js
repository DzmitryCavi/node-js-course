let tasksData = require('../../data/data').tasks;

const getByBoardId = async boardId => {
    return tasksData.filter(task => task.boardId === boardId);
};

const getByTaskIdAndBoardId = async (boardId, taskId) => { 
  return tasksData.find(task => task.id === taskId && task.boardId === boardId);
};

const create = async data => {
  tasksData.push({...data,
    userId: data.userId || null,
    columnId: data.columnId || null
});
  return data;
};

const update = async (boardId, taskId, data) => {
  let updatedData ={};
  tasksData = tasksData.map(task => {
    if(task.id === taskId && task.boardId === boardId){
      updatedData = {...task, ...data};
      task = updatedData;
    }
    return task;
  })
  return updatedData;
};

const deleteTaskById = async (boardId, taskId) => {
  let isDeleted = false;
  tasksData = tasksData.filter(task => {
    if(task.id !== taskId && task.boardId !== (boardId ? boardId : task.boardId)){
      return true;
    }
    isDeleted = true;
    return false;
  });
  return isDeleted;
};

const unassignUser = async userId => {
    tasksData = tasksData.map(task => task.userId === userId ? {...task, userId: null} : task);
  };

module.exports = { getByBoardId, getByTaskIdAndBoardId, update, deleteTaskById, create, unassignUser };