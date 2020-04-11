const router = require('express').Router();
const tasksController = require('./tasks.controller');
const { validate } = require('express-validation');
const tasksValidation = require('./tasks.validation');

router
  .route('/:boardId/tasks')
  .get([validate(tasksValidation.getByBoardId), tasksController.getByBoardId])
  .post([validate(tasksValidation.create), tasksController.create]);
router
  .route('/:boardId/tasks/:taskId')
  .get([
    validate(tasksValidation.getByTaskIdAndBoardId),
    tasksController.getByTaskIdAndBoardId
  ])
  .put([validate(tasksValidation.update), tasksController.update])
  .delete([
    validate(tasksValidation.getByTaskIdAndBoardId),
    tasksController.deleteTaskById
  ]);

module.exports = router;
