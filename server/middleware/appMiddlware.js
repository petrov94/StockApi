const cors = require('cors');
const dotenv = require('dotenv');
module.exports = function (app) {
    dotenv.config()
    app.use(cors());
};
