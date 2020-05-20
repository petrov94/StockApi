const stockService = require('../services/stockPricesService')
// const utils = require('../../util/utils');
exports.get = async function (request, response, next) {
    const name = request.params.name;
    await stockService.setCompanyName(name);
    await stockService.getStockPricesByName().then(function (stockData) {
        response.json(stockData);
    }).catch(function (error) {
        next(error)
    });
};