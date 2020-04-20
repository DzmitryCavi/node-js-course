const userService = require('./user.service');
const catchErrors = require('../../common/catchErrors');
const HttpStatus = require('http-status-codes');

exports.getAll = catchErrors(async (req, res) => {
  const users = await userService.getAll();
  res.status(HttpStatus.OK).json(users.map(user => user.toResponse()));
});

exports.create = catchErrors(async (req, res) => {
  const user = await userService.create(req.body);
  res.status(HttpStatus.OK).json(user.toResponse());
});

exports.getById = catchErrors(async (req, res) => {
  const user = await userService.getById(req.params.id);
  if (user) res.status(HttpStatus.OK).json(user.toResponse());
  else req.status(HttpStatus.NOT_FOUND).json('User not found!');
});

exports.update = catchErrors(async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.status(200).json(user.toResponse());
});

exports.deleteById = catchErrors(async (req, res) => {
  const status = await userService.deleteById(req.params.id);
  if (status) res.status(HttpStatus.OK).json('Deleted');
  else res.status(HttpStatus.NO_CONTENT).json('No content');
});
