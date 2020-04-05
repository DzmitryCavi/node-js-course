const router = require('express').Router();
const taskService = require('./tasks.service.js');

router.route('/:boardId/tasks').get([taskService.getByBoardId]);
router
  .route('/:boardId/tasks/:taskId')
  .get([taskService.getByTaskIdAndBoardId]);
router.route('/:boardId/tasks').post([taskService.create]);
router.route('/:boardId/tasks/:taskId').put([taskService.update]);
router.route('/:boardId/tasks/:taskId').delete([taskService.deleteTaskById]);

module.exports = router;
