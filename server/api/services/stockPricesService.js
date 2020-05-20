const axios = require('axios');
const finalResponse = require('../../util/utils')

function stockPricesService() {

    var companyName;

    function setCompanyName(name) {
        companyName = name;
    }

    function convertTimeStampToDate(timeStampt) {
        return new Date(timeStampt * 1000).toLocaleString();
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

    function getStockPricesByName() {
        if (companyName) {
            return axios.get(`https://finnhub.io/api/v1/quote?symbol=` + companyName + `&token=` + process.env.FINHUBTOKEN)
                .then((response) => {
                    const jsonText = JSON.stringify(response.data);
                    if (jsonText === "\"Symbol not supported\"") {
                        throw new Error(finalResponse.unsupportedCompany);
                    } else {
                        const responseObject = JSON.parse(jsonText);
                        return stockPricesResponse(responseObject);
                    }
                }).catch(error => {
                console.error(error);
                throw error;
            });
        }
    }

    return {getStockPricesByName,setCompanyName };
}

module.exports = stockPricesService();