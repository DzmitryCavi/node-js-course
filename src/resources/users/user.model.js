const { getAll, getById, update, deleteById, create } = require('./user.memory.repository');

class User {
  constructor() {}

  static getAll(){
    return new Promise(async resolve => {
      const users = await getAll();
      resolve(users.map(User.toResponse));
    })
  }

  static getById(id){
    return new Promise(async resolve => {
      const user = await getById(id);
      resolve(User.toResponse(user));
    })
  }

  static create(data){
    return new Promise(async resolve => {
      const user = await create(data);
      resolve(User.toResponse(user));
    })
  }

  static update(id, data){
    return new Promise(async resolve => {
      const user = await update(id, data);
      resolve(User.toResponse(user));
    })
  }

  static deleteById(id){
    return new Promise(async resolve => {
      const status = await deleteById(id);
      resolve(status);
    })
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
