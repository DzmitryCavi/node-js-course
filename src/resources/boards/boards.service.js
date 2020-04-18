const boardsDB = require('./boards.db.repository');

const getAll = () => boardsDB.getAll();
const getById = id => boardsDB.getById(id);
const create = board => boardsDB.create(board);
const update = (id, data) => boardsDB.update(id, data);
const deleteById = id => boardsDB.deleteById(id);

module.exports = { getAll, getById, update, deleteById, create };
