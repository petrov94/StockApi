var sinon = require('sinon');
var describe = require("mocha").describe;
var it =  require("mocha").it;
var chai = require('chai');
chai.should();
var revenueController = require('../../server/api/controllers/revenueController');
var revenueService = require('../../server/api/services/revenueService');
var afterEach = require("mocha").afterEach;
describe('revenueController', function () {
    var request, response, next, revenueData;
    it('should call service method one time with frequency parameter', function () {
        request = {params: {name: "AAPL"},query: {freq :"annual"}};
        response = sinon.stub();
        next = sinon.stub();
        revenueData = sinon.spy(revenueService, "getEstimatedRevenue");
        revenueController.get(request, response, next)
        revenueData.calledOnce.should.be.true;
    });
    it('should call service method one time', function () {
        request = {params: {name: "AAPL"},query: {freq :""}};
        response = sinon.stub();
        next = sinon.stub();
        revenueData = sinon.spy(revenueService, "getEstimatedRevenue");
        revenueController.get(request, response, next)
        revenueData.calledOnce.should.be.true;
    });
    afterEach(function () {
        revenueData.restore();
    });
});