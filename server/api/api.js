const router = require('express').Router();

// api router will mount stock prices router
router.use('/stock/prices', require('./routes/stockPricesRoutes'));

module.exports = router;
