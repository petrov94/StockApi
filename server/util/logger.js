var {createLogger, format, transports} = require('winston');
const {label, combine, timestamp, prettyPrint} = format;
/**
 * Logger configuration using winston.
 */
const logger = createLogger({
  format: combine(
      timestamp(),
      prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({filename: './error.log', level: 'error'}),
    new transports.File({filename: './info.log', level: 'info'}),
  ],
  exitOnError: false,
});

module.exports = logger;