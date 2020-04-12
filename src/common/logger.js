const { NODE_ENV } = require('./config');
const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({
      filename: './logs/allLogs.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
      handleExceptions: true
    })
  ],
  // exceptionHandlers: [
  //   new transports.File({ filename: './logs/exceptions.log' })
  // ],
  exitOnError: true
});

if (NODE_ENV !== 'production') {
  logger.add(new transports.Console());
}

module.exports = logger;
