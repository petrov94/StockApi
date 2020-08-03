const revenueAnnualEstimate = {
    data: [
        {
            "numberAnalysts": 15,
            "period": "2022-09-30",
            "revenueAvg": 316095914850,
            "revenueHigh": 357908250000,
            "revenueLow": 292492054000
        },
        {
            "numberAnalysts": 38,
            "period": "2021-09-30",
            "revenueAvg": 309595000000,
            "revenueHigh": 347961600000,
            "revenueLow": 283619270000
        },
    ],
    freq: 'annual',
    symbol: "AAPL"
};
const revenueQuarterEstimate = {
    data: [
        {
            "numberAnalysts": 15,
            "period": "2022-09-30",
            "revenueAvg": 316095914850,
            "revenueHigh": 357908250000,
            "revenueLow": 292492054000
        },
        {
            "numberAnalysts": 38,
            "period": "2021-09-30",
            "revenueAvg": 309595000000,
            "revenueHigh": 347961600000,
            "revenueLow": 283619270000
        },
    ],
    freq: 'quarterly',
    symbol: "AAPL"
};

const revenueService = "https://finnhub.io/api/v1/stock/revenue-estimate?symbol=AAPL&token=undefined";
const revenueServiceAnnual = "https://finnhub.io/api/v1/stock/revenue-estimate?symbol=AAPL&freq=annual&token=undefined";
const stockPricesService = "https://finnhub.io/api/v1/quote?symbol=AAPL&token=undefined";
const stockPricesServiceWrongRequest = "https://finnhub.io/api/v1/quote?symbol=Ab&token=undefined";
const stockPricesServiceError = "Symbol not supported";

module.exports = {
    stockPricesServiceWrongRequest,
    stockPricesServiceError,
    stockPricesService,
    revenueAnnualEstimate,
    revenueServiceAnnual,
    revenueService,
    revenueQuarterEstimate
};