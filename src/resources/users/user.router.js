const router = require('express').Router();
const usersService = require('./user.service');

router.route('/').get([usersService.getAll]);
router.route('/:id').get([usersService.getById]);
router.route('/').post([usersService.create]);
router.route('/:id').put([usersService.update]);
router.route('/:id').delete([usersService.deleteById]);

module.exports = router;
