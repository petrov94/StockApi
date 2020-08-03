const invalidToken = "Token failed validation.";
const authorizationHeader = "You must send an Authorization header.";
const validToken = "Token is valid.";
const bearer = "Expected a Bearer token.";
const tickerSymbol = "Invalid Ticker Symbol.";
const errorMessage = "No data for this ticker symbol.";
const unsupportedCompany = "Not a valid company.";
const urlFinHub = "https://finnhub.io/api/v1/quote?symbol=";
const urlToken = "&token=";
const revenueEstimates = "https://finnhub.io/api/v1/stock/revenue-estimate?symbol=";
const revenueEstimatesFrequency = "&freq=";
/**
 * Util file keeping all non-sensitive information.
 */
module.exports = {
    revenueEstimates,
    revenueEstimatesFrequency,
    urlToken,
    urlFinHub,
    unsupportedCompany,
    tickerSymbol,
    bearer,
    validToken,
    authorizationHeader,
    invalidToken,
    errorMessage,
};