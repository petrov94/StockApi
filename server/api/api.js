const  router = require('express').Router();

/**
 * Api router will mount specific router depending on url request.
 */

router.use('/stock/prices', require('./routes/stockPricesRoutes'));
router.use('/stock/revenue-estimate', require('./routes/revenueRouters'));
router.use('/healthcheck', require('./routes/healthcheckRouter'));
module.exports = router;
