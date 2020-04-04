const { getAll, getById, update, deleteById, create } = require('./boards.memory.repository');

class Board {
  constructor() {}

  static getAll(){
    return new Promise(async resolve => {
      const boards = await getAll();
      resolve(boards);
    })
  }

  static getById(id){
    return new Promise(async resolve => {
      const board = await getById(id);
      resolve(board);
    })
  }

  static create(data){
    return new Promise(async resolve => {
      const board = await create(data);
      resolve(board);
    })
  }

  static update(id, data){
    return new Promise(async resolve => {
      const board = await update(id, data);
      resolve(board);
    })
  }

  static deleteById(id){
    return new Promise(async resolve => {
      const status = await deleteById(id);
      resolve(status);
    })
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
