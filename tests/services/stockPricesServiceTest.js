var stockPricesService = require('../../server/api/services/stockPricesService');
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var chai = require('chai');
var mocha = require("mocha");
var describe = mocha.describe;
var mock = new MockAdapter(axios);
chai.should();
describe('stockPricesService', function () {
    it('should return valid stock prices data', function () {
        const data = {"c":313.14,"h":318.52,"l":313.01,"o":315.03,"pc":314.96,"t":1589929134};
        mock.onGet().reply(200, data);
        stockPricesService.setCompanyName("AAPL")
        return stockPricesService.getStockPricesByName().then(function(stockData){
            stockData.should.have.property('openPrice');
        });
    })
    it('should return valid stock prices data', function () {
        const message = "Symbol not supported";
        mock.onGet().reply(500, message);
        stockPricesService.setCompanyName("AAPL")
        return stockPricesService.getStockPricesByName().then(function(stockData,error){
            stockData.should.have.message(error);
        });
    })
});