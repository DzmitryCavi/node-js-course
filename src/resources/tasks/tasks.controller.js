const taskService = require('./tasks.service');
const Task = require('./tasks.model');

exports.getByBoardId = async (req, res) => {
  try {
    const tasks = await taskService.getByBoardId(req.params.boardId);
    res.status(200).json(tasks);
  } catch {
    res.status(404).send('Bad request');
  }
};

exports.create = async (req, res) => {
  req.body.boardId = req.params.boardId;
  const task = await taskService.create(new Task(req.body));
  res.status(200).json(Task.toResponse(task));
};

exports.getByTaskIdAndBoardId = async (req, res) => {
  try {
    const task = await taskService.getByTaskIdAndBoardId(
      req.params.boardId,
      req.params.taskId
    );
    res.status(200).json(Task.toResponse(task));
  } catch {
    res.status(404).send('Bad request');
  }
};

exports.update = async (req, res) => {
  const task = await taskService.update(
    req.params.boardId,
    req.params.taskId,
    req.body
  );
  res.status(200).json(Task.toResponse(task));
};

exports.deleteTaskById = async (req, res) => {
  const status = await taskService.deleteTaskById(
    req.params.boardId,
    req.params.taskId
  );
  res.status(204).json(status);
};
