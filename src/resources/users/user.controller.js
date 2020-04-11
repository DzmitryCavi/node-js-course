const userService = require('./user.service');
const User = require('./user.model');

exports.getAll = async (req, res) => {
  const users = await userService.getAll();
  res.status(200).json(users);
};

exports.create = async (req, res) => {
  const user = await userService.create(new User(req.body));
  res.status(200).json(User.toResponse(user));
};

exports.getById = async (req, res) => {
  const user = await userService.getById(req.params.id);
  res.status(200).json(User.toResponse(user));
};

exports.update = async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.status(200).json(User.toResponse(user));
};

exports.deleteById = async (req, res) => {
  const status = await userService.deleteById(req.params.id);
  res.status(200).json(status);
};
