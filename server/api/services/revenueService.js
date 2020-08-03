const axios = require('axios');
const utils = require('../../util/utils');
/**
 * Revenue service responsible for retrieving the revenue estimation data from finhub side. In case of validation throw an error, which is handled in the global error handler.
 * */
function revenueService() {

    function getEstimatedRevenue(companyName, frequency) {
        let url;
        if (frequency) {
            url = utils.revenueEstimates + companyName + utils.revenueEstimatesFrequency + frequency
                + utils.urlToken + process.env.FINHUBTOKEN;
        } else {
            url = utils.revenueEstimates + companyName + utils.urlToken + process.env.FINHUBTOKEN;
        }
        return axios.get(url)
        .then((response) => {
            return response.data;
        }).catch(error => {
            throw error;
        });
    }

    return {getEstimatedRevenue};
}

module.exports = revenueService();