const User = require('./user.model');
const uuid = require('uuid');

const getAll = (req, res) => {
  User.getAll().then(result => {
    res.status(200).json(result);
  });
};

const getById = (req, res) => {
  User.getById(req.params.id).then(result => {
    res.status(200).json(result);
  });
};

const create = (req, res) => {
  req.body.id = uuid();
  User.create(req.body).then(result => {
    console.log(result);
    res.status(200).json(result);
  });
};

const update = (req, res) => {
  User.update(req.params.id, req.body).then(result => {
    res.status(200).json(result);
  });
};

const deleteById = (req, res) => {
  User.deleteById(req.params.id).then(result => {
    res.status(200).json(result);
  });
};

module.exports = { getAll, getById, update, deleteById, create };
