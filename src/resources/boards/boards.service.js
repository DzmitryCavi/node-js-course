const boardsRepo = require('./boards.memory.repository');

const getAll = () => boardsRepo.getAll();
const getById = id => boardsRepo.getById(id);
const create = board => boardsRepo.create(board);
const update = (id, data) => boardsRepo.update(id, data);
const deleteById = id => boardsRepo.deleteById(id);

module.exports = { getAll, getById, update, deleteById, create };
