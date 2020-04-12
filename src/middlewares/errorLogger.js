/* eslint no-unused-vars: ["error", { "args": "none" }] */
const logger = require('../common/logger');
const { ValidationError } = require('express-validation');

module.exports = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    let errorMassages = [];
    for (const key in err.details) {
      if (Object.prototype.hasOwnProperty.call(err.details, key)) {
        errorMassages.push(...err.details[key].map(e => e.message));
      }
    }

    if (errorMassages.length) {
      errorMassages = `\nError massages:\n${errorMassages.join('\n')}`;
    } else {
      errorMassages = '';
    }

    logger.error(
      `${err.statusCode} ${err.error} ${err.message} ${errorMassages}`
    );
    return res.status(err.statusCode).json(err);
  }
  logger.error(`${err.message}`);
  return res.status(500).json(err);
};
