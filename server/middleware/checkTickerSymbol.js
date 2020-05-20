const cts = require('check-ticker-symbol');
const errorMessages = require('../util/utils');
module.exports = async (request, response, next) => {
    const name = request.params.name;
    if (cts.valid(name)) {
        next();
    } else {
        response.status(400);
        response.json({"Message" : errorMessages.tickerSymbol});
        return;
    }
}