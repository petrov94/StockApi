const cts = require('check-ticker-symbol');
const errorMessages = require('../util/utils');
const logger = require('../util/logger');
/**
 *
 * @param request
 * @param response
 * @param next
 * @returns {Promise<void>}
 */
module.exports = async (request, response, next) => {
    logger.log({
        message: 'Check Ticker Symbol Middleware execution.',
        level: 'info',
        request: request.params, operation: 'Ticker-Symbol-Middleware'
    });
    let name = request.params.name;
    if (cts.valid(name)) {
        next();
    } else {
        logger.log({
            message: 'Invalid parameter was send.',
            level: 'error',
            response: request.params, status: 400,
            operation: 'Ticker-Symbol-Middleware'
        });
        response.json({"Message" : errorMessages.tickerSymbol});
        response.status(400);
        response.end();
    }
}