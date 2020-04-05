const {
  getAll,
  getById,
  update,
  deleteById,
  create
} = require('./user.memory.repository');

class User {
  constructor() {}

  static async getAll() {
    const users = await getAll();
    return users;
  }

  static async getById(id) {
    const user = await getById(id);
    return user;
  }

  static async create(data) {
    const user = await create(data);
    const { id, name, login } = user;
    return { id, name, login };
  }

  static async update(id, data) {
    const user = await update(id, data);
    return user;
  }

  static async deleteById(id) {
    const status = await deleteById(id);
    return status;
  }
}

module.exports = User;
