const  axios = require('axios');
const  finalResponse = require('../../util/utils');
/**
 *  Stock prices service responsible for retrieving the stock quote data from finhub side. In case of validation throw an error, which is handled in the global error handler.
 * */
function stockPricesService() {

    function convertTimeStampToDate(timeStamp) {
        return new Date(timeStamp * 1000).toLocaleString();
    }

    function stockPricesResponse(finhubResponse) {
        return {
            'openPrice': finhubResponse.o,
            'highPrice': finhubResponse.h,
            'lowPrice': finhubResponse.l,
            'currentPrice': finhubResponse.c,
            'previousClosePrice': finhubResponse.pc,
            'timeStamp': convertTimeStampToDate(finhubResponse.t)
        }
    }

    function getStockPricesByName(companyName) {
        if (companyName) {
            return axios.get(finalResponse.urlFinHub + companyName + finalResponse.urlToken + process.env.FINHUBTOKEN)
                .then((response) => {
                    const jsonText = JSON.stringify(response.data);
                    if (jsonText === "\"Symbol not supported\"") {
                        throw new Error(finalResponse.unsupportedCompany);
                    } else {
                        const responseObject = JSON.parse(jsonText);
                        return stockPricesResponse(responseObject);
                    }
                }).catch(error => {
                throw error;
            });
        }
    }

    return {getStockPricesByName,convertTimeStampToDate};
}

module.exports = stockPricesService();