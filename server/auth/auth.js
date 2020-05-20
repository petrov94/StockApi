const OktaJwtVerifier = require('@okta/jwt-verifier')
const errorMessages = require('../util/utils');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.ISSUER,
    clientId: process.env.CLIENT_ID
})

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) throw new Error(errorMessages.authorizationHeader)

        const [authType, token] = authorization.trim().split(' ')
        if (authType !== 'Bearer') throw new Error(errorMessages.bearer)

        await oktaJwtVerifier.verifyAccessToken(token,'api://default').then(jwt => console.log(errorMessages.validToken) )
        .catch(err => {console.warn(errorMessages.invalidToken); throw new Error(err.message);});
        next()
    } catch (error) {
        next('401 : ' + error.message)
    }
}
