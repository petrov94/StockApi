const  express = require('express');
const  router = express.Router();
const  controller = require('../controllers/revenueController');
const  auth = require('../../auth/auth');
const  tickerSymbol = require('../../middlewares/checkTickerSymbol');
/**
 * Revenue router responsible for authentication and validation of http request data and if a valid data is provided
 * to trigger the Revenue Controller responsible for handling the http request.
 */
router.route('/:name')
.get(auth,tickerSymbol,controller.get)

module.exports = router;