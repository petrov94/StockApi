const  stockService = require('../services/stockPricesService');
const  logger = require('../../util/logger');
/**
 * Health check controller. To check the connection to finnhub api we execute a request for retrieving a data for company Agilent Technologies.
 * Depending on the result we define if the response is successful or not.
 * @param request - http request
 * @param response - http response
 * @param next - calling the next function depending on the outcome of the request
 */
exports.get = async function (request, response, next) {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: stockService.convertTimeStampToDate(Date.now())
    };
    logger.log({message:'Health Check endpoint triggered.',
        level:'info' ,
        operation:'health-check' });
    await stockService.getStockPricesByName("A").then(() => {
            response.json(healthcheck);
            next();
        }
    ).catch(function (error) {
        logger.log({message:'Health Check error occurred.',
            level:'error' ,
            response:error.message, status:503,
            operation:'health-check'});
        healthcheck.message = error.message;
        response.json(healthcheck);
        response.status(503);
        response.end();
    });
};