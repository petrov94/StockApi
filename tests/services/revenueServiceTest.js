var revenueService = require('../../server/api/services/revenueService');
var testUtil = require('../config/testConfiguration');
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var chai = require('chai');
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var before = mocha.before;
var after = mocha.after;
var afterEach = mocha.afterEach;
chai.should();
describe('revenueService', function () {
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
    it('should return valid revenue data per quarter period', function () {
        mock.onGet(testUtil.revenueService).reply(200, testUtil.revenueQuarterEstimate);
        return revenueService.getEstimatedRevenue("AAPL").then(function(stockData){
            stockData.should.have.property('freq');
            stockData.freq.should.equal('quarterly');
        });
    });
    it('should return valid revenue data per annual period', function () {
        mock.onGet(testUtil.revenueServiceAnnual).reply(200, testUtil.revenueAnnualEstimate);
        return revenueService.getEstimatedRevenue("AAPL","annual").then(function(stockData){
            stockData.should.have.property('freq');
            stockData.freq.should.equal('annual');
        });
    });
});