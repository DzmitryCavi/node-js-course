const router = require('express').Router();
const usersController = require('./user.controller');
const { validate } = require('express-validation');
const UserValidation = require('./user.validation');

router
  .route('/')
  .get([usersController.getAll])
  .post([validate(UserValidation.create), usersController.create]);
router
  .route('/:id')
  .get([validate(UserValidation.getById), usersController.getById])
  .put([validate(UserValidation.update), usersController.update])
  .delete([validate(UserValidation.getById), usersController.deleteById]);

module.exports = router;
