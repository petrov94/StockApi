const  OktaJwtVerifier = require('@okta/jwt-verifier');
const  messages = require('../util/utils');
const  logger = require('../util/logger');
const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.ISSUER,
    clientId: process.env.CLIENT_ID
})
/**
 * Authentication middleware responsible for JWT token validation based on issuer address and client_id value. If the validation fail the request will not be executed.
 */
module.exports = async (request, response, next) => {
    logger.log({
        message: 'Jwt token validation',
        level: 'info',
        request: request.headers, operation: 'stock-prices'
    });
    try {
        const { authorization } = request.headers;
        if (!authorization) throw new Error(messages.authorizationHeader);

        const [authType, token] = authorization.trim().split(' ');
        if (authType !== 'Bearer') throw new Error(messages.bearer);

        await oktaJwtVerifier.verifyAccessToken(token,'api://default').then(jwt =>
            logger.log({
                message: messages.validToken,
                level: 'info',
                request: request.headers, operation: 'authentication'
            }))
        .catch(err => {
            logger.log({
                message: err.message,
                level: 'error',
                request: request.headers, operation: 'authentication'
            }); throw new Error(err.message);});
        next();
    } catch (error) {
        next('401 : ' + error.message);
    }
}
