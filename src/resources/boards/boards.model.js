const {
  getAll,
  getById,
  update,
  deleteById,
  create
} = require('./boards.memory.repository');

class Board {
  constructor() {}

  static async getAll() {
    const boards = await getAll();
    return boards;
  }

  static async getById(id) {
    const board = await getById(id);
    return board;
  }

  static async create(data) {
    const board = await create(data);
    return board;
  }

  static async update(id, data) {
    const board = await update(id, data);
    return board;
  }

  static async deleteById(id) {
    const status = await deleteById(id);
    return status;
  }
}

module.exports = Board;
