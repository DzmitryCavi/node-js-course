const router = require('express').Router();
const AuthController = require('./auth.controller');

router.route('/login').post(AuthController.login);

module.exports = router;
