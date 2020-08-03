const  stockService = require('../services/revenueService');
const  logger = require('../../util/logger');
/**
 * Revenue controller. Controller retrieved the company name and the frequency param if it is provided from the request and forward them to the service layer.
 * In case of fail it forward the error to the global error-handler.
 * @param request - http request
 * @param response - http response
 * @param next - calling the next function depending on the outcome of the request
 */
exports.get = async function (request, response, next) {
  const name = request.params.name;
  let freq = request.query.freq ? request.query.freq : null;
  logger.log({
    message: 'Received revenue request.',
    level: 'info',
    request: request.params, operation: 'revenue'
  });
  await stockService.getEstimatedRevenue(name, freq).then(stockData =>
      response.json(stockData)
  ).catch(function (error) {
    logger.log({
      message: 'Error occurred during revenue request.',
      level: 'error',
      response: error.message, status: 500,
      operation: 'revenue'
    });
    next(error);
  });
};
