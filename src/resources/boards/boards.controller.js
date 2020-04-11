const boardService = require('./boards.service');
const Board = require('./boards.model');

exports.getAll = async (req, res) => {
  try {
    const boards = await boardService.getAll();
    res.status(200).json(boards);
  } catch {
    res.status(404).send('Bad request');
  }
};

exports.create = async (req, res) => {
  const board = await boardService.create(new Board(req.body));
  res.status(200).json(Board.toResponse(board));
};

exports.getById = async (req, res) => {
  try {
    const board = await boardService.getById(req.params.id);
    res.status(200).json(Board.toResponse(board));
  } catch {
    res.status(404).send('Bad request');
  }
};

exports.update = async (req, res) => {
  const board = await boardService.update(req.params.id, req.body);
  res.status(200).json(Board.toResponse(board));
};

exports.deleteById = async (req, res) => {
  const status = await boardService.deleteById(req.params.id);
  res.status(204).json(status);
};
