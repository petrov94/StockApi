const  express = require('express');
const  router = express.Router();
const  controller = require('../controllers/stockPricesController');
const  auth = require('../../auth/auth');
const  tickerSymbol = require('../../middlewares/checkTickerSymbol');
/**
 * Stock Prices router responsible for authentication and validation of http request data and if a valid data is provided
 * to trigger the Stock Price Controller responsible for handling the http request.
 */
router.route('/:name')
.get(auth,tickerSymbol,controller.get)

module.exports = router;