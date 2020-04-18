const boardService = require('./boards.service');
const catchErrors = require('../../common/catchErrors');
const HttpStatus = require('http-status-codes');

exports.getAll = catchErrors(async (req, res) => {
  const boards = await boardService.getAll();
  if (boards) {
    res.status(HttpStatus.OK).json(boards.map(board => board.toResponse()));
  } else res.status(HttpStatus.NOT_FOUND).send('not found!');
});

exports.create = catchErrors(async (req, res) => {
  const board = await boardService.create(req.body);
  res.status(HttpStatus.OK).json(board.toResponse());
});

exports.getById = catchErrors(async (req, res) => {
  const board = await boardService.getById(req.params.id);
  if (board) res.status(HttpStatus.OK).json(board.toResponse());
  else res.status(HttpStatus.NOT_FOUND).send('Board not found!');
});

exports.update = catchErrors(async (req, res) => {
  const board = await boardService.update(req.params.id, req.body);
  if (board) res.status(HttpStatus.OK).send(board.toResponse() && board);
  else res.status(HttpStatus.NO_CONTENT).send('No content!');
});

exports.deleteById = catchErrors(async (req, res) => {
  const board = await boardService.deleteById(req.params.id);
  if (board) res.status(HttpStatus.OK).send('Deleted !');
  else res.status(HttpStatus.NO_CONTENT).send('No content!');
});
