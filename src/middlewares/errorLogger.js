const logger = require('../common/logger');
const { ValidationError } = require('express-validation');

module.exports = (err, req, res) => {
  if (err instanceof ValidationError) {
    logger.error(err.message);
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
};
