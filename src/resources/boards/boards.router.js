const router = require('express').Router();
const boardsService = require('./boards.service');

router.route('/').get([boardsService.getAll]);
router.route('/:id').get([boardsService.getById]);
router.route('/').post([boardsService.create]);
router.route('/:id').put([boardsService.update]);
router.route('/:id').delete([boardsService.deleteById]);

module.exports = router;
