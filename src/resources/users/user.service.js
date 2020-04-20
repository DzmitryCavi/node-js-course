const userDB = require('./user.db.repositiry');

const getAll = () => userDB.getAll();
const getById = id => userDB.getById(id);
const create = user => userDB.create(user);
const update = (id, data) => userDB.update(id, data);
const deleteById = id => userDB.deleteById(id);

module.exports = { getAll, getById, update, deleteById, create };
