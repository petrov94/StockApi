var stockPricesService = require('../../server/api/services/stockPricesService');
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var utils = require('../../server/util/utils');
var testUtil = require('../config/testConfiguration');
var chai = require('chai');
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var before = mocha.before;
var after = mocha.after;
var afterEach = mocha.afterEach;
chai.should();
describe('stockPricesService', function () {
    let mock;
    before(() => {
        mock = new MockAdapter(axios)
    });

    afterEach(() => {
        mock.reset()
    });

    after(() => {
        mock.restore()
    });
    it('should return valid stock prices data', function () {
        const data = {"c":313.14,"h":318.52,"l":313.01,"o":315.03,"pc":314.96,"t":1589929134};
        mock.onGet(testUtil.stockPricesService).reply(200, data);
        return stockPricesService.getStockPricesByName("AAPL").then(function(stockData){
            stockData.should.have.property('openPrice');
        });
    });
    it('should return Symbol not supported', function () {
        mock.onGet(testUtil.stockPricesServiceWrongRequest).reply(200, testUtil.stockPricesServiceError);
        return stockPricesService.getStockPricesByName("Ab").catch((error) =>{
            error.should.be.an.instanceOf(Error);
            error.message.should.equal(utils.unsupportedCompany);
        });
    });
});