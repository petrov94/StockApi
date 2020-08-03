var sinon = require('sinon');
var describe = require("mocha").describe;
var it =  require("mocha").it;
var chai = require('chai');
chai.should();
var stockController = require('../../server/api/controllers/stockPricesController');
var stockPricesService = require('../../server/api/services/stockPricesService');
describe('stockPricesController', function () {
    var request, response, next, getStock;
    it('should call service method one time', function () {
        request = {params: {name: "AAPL"}};
        response = sinon.stub();
        next = sinon.stub();
        getStock = sinon.spy(stockPricesService, "getStockPricesByName");
        stockController.get(request, response, next)
        getStock.calledOnce.should.be.true;
    });
});

