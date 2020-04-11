const morgan = require('morgan');
const logger = require('../common/logger');

logger.stream = {
  write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
};

morgan.token('body', req => {
  return JSON.stringify(req.body) || '';
});

morgan.token('params', req => {
  return JSON.stringify(req.params) || '';
});

module.exports = morgan(':method :url :status :body :params', {
  stream: logger.stream
});
