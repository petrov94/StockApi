const  stockService = require('../services/stockPricesService');
const  logger = require('../../util/logger');
/**
 * Stock Quote controller. Controller retrieved the company name from the request and forward if to the service layer.
 * In case of fail it forward the error to the global error-handler.
 * @param request - http request
 * @param response - http response
 * @param next - calling the next function depending on the outcome of the request
 */
exports.get = async function (request, response, next) {
  const name = request.params.name;
  logger.log({
    message: 'Received stock prices request.',
    level: 'info',
    request: request.params, operation: 'stock-prices'
  });
  await stockService.getStockPricesByName(name).then(stockData =>
      response.json(stockData)
  ).catch(function (error) {
    logger.log({
      message: 'Error occurred during stock prices request.',
      level: 'error',
      response: error.message, status: 500,
      operation: 'stock-prices'
    });
    next(error);
  });
};
