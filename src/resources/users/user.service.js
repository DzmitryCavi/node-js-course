const userRepo = require('./user.memory.repository');

const getAll = () => userRepo.getAll();
const getById = id => userRepo.getById(id);
const create = user => userRepo.create(user);
const update = (id, data) => userRepo.update(id, data);
const deleteById = id => userRepo.deleteById(id);

module.exports = { getAll, getById, update, deleteById, create };
