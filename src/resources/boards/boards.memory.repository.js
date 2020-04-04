let boardsData = require('../../data/data').boards;
const { deleteTaskById } = require('../tasks/tasks.memory.repository');
const getAll = async () => {
  return boardsData;
};

const getById = async id => { 
  return boardsData.find(board => board.id === id);
};

const create = async data => {
  boardsData.push(data);
  return data;
};

const update = async (id, data) => {
  let updatedData ={};
  boardsData = boardsData.map(board => {
    if(board.id === id){
      updatedData = {...board, ...data};
      board = updatedData;
    }
    return board;
  })
  return updatedData;
};

const deleteById = async id => {
  let isDeleted = false;
  boardsData = boardsData.filter(board => {
    if(board.id !== id){
      return true;
    }
    isDeleted = true;
    return false;
  })
  deleteTaskById(id);
  return isDeleted;
};

module.exports = { getAll, getById, update, deleteById, create };