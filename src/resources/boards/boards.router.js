const router = require('express').Router();
const boardsController = require('./boards.controller');
const { validate } = require('express-validation');
const boardsValidation = require('./boards.validation');

router
  .route('/')
  .get([boardsController.getAll])
  .post([validate(boardsValidation.create), boardsController.create]);
router
  .route('/:id')
  .get([validate(boardsValidation.getById), boardsController.getById])
  .put([validate(boardsValidation.update), boardsController.update])
  .delete([validate(boardsValidation.getById), boardsController.deleteById]);

module.exports = router;
