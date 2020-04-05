const Board = require('./boards.model');
const uuid = require('uuid');

const getAll = (req, res) => {
  Board.getAll().then(result => {
    res.status(200).json(result);
  });
};

const getById = (req, res) => {
  Board.getById(req.params.id).then(result => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  });
};

const create = (req, res) => {
  req.body.id = uuid();
  Board.create(req.body).then(result => {
    res.status(200).json(result);
  });
};

const update = (req, res) => {
  Board.update(req.params.id, req.body).then(result => {
    res.status(200).json(result);
  });
};

const deleteById = (req, res) => {
  Board.deleteById(req.params.id).then(result => {
    res.status(200).json(result);
  });
};

module.exports = { getAll, getById, update, deleteById, create };
