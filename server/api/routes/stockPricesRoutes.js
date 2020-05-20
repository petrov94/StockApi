const express = require('express');
const router = express.Router();
const controller = require('../controllers/stockPricesController');
const auth = require('../../auth/auth');
const tickerSymbol = require('../../middleware/checkTickerSymbol');
router.route('/:name')
.get(auth,tickerSymbol,controller.get)

module.exports = router;
