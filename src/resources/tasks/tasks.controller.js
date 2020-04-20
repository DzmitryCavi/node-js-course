const taskService = require('./tasks.service');
const catchErrors = require('../../common/catchErrors');
const HttpStatus = require('http-status-codes');

exports.getByBoardId = catchErrors(async (req, res) => {
  const tasks = await taskService.getByBoardId(req.params.boardId);
  if (tasks) {
    res.status(HttpStatus.OK).json(tasks.map(task => task.toResponse()));
  } else res.status(HttpStatus.NOT_FOUND).send('Not found!');
});

exports.create = catchErrors(async (req, res) => {
  req.body.boardId = req.params.boardId;
  const task = await taskService.create(req.body);
  res.status(HttpStatus.OK).json(task.toResponse());
});

exports.getByTaskIdAndBoardId = catchErrors(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getByTaskIdAndBoardId(boardId, taskId);
  if (task) res.status(HttpStatus.OK).json(task.toResponse());
  else res.status(HttpStatus.NOT_FOUND).send('Not found!');
});

exports.update = catchErrors(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.update(boardId, taskId, req.body);
  if (task) res.status(HttpStatus.OK).json(task.toResponse());
  else res.status(HttpStatus.NO_CONTENT);
});

exports.deleteTaskById = catchErrors(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.deleteTaskById(boardId, taskId);
  console.log(task);
  if (task) res.status(HttpStatus.OK).send('deleted');
  else res.status(HttpStatus.NO_CONTENT);
});
