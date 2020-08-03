const  express = require('express');
const  router = express.Router();
const  controller = require('../controllers/healthController');
/**
 * Health check router responsible to trigger the Health Check Controller responsible for handling the http request.*/
router.route('/')
.get(controller.get)

module.exports = router;