var checkTickerSymbol = require('../../server/middlewares/checkTickerSymbol');
var sinon = require('sinon');
var chai = require('chai');
var mocha = require("mocha");
var cts = require('check-ticker-symbol');
var it = mocha.it;
var describe = mocha.describe;
var afterEach = mocha.afterEach;
chai.should();
describe('checkTickerSymbol', function () {
    var request, response, next, isValid;
    it('should return true', function () {
        request = {params: {name: "AAPL"}};
        response = sinon.stub();
        next = sinon.stub();
        isValid = sinon.stub(cts, "valid").returns(true);
        checkTickerSymbol(request,response,next);
        isValid.calledOnce.should.be.true;
    });
    it('should return Symbol not supported', function () {
        request = {params: {name: "123"}};
        response = {json: sinon.stub(),status: sinon.stub()};
        next = sinon.stub();
        isValid = sinon.stub(cts, "valid").returns(false);
        checkTickerSymbol(request,response,next);
        isValid.calledOnce.should.be.true;
    });
    afterEach(function () {
        isValid.restore();
    });
});