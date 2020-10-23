const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (payload = {}, signOptions = {}) => {
    payload = Object.assign({}, {
        security: true,
    }, payload);

    signOptions = Object.assign({}, {
        algorithm: 'RS256'
    }, signOptions)

    if (true === signOptions.security) {
        payload.sign = ((ip, agent) => bcrypt.hashSync(`${ip}:${agent}`, bcrypt.genSaltSync(2)))(
            req.connection.remoteAddress,
            req.headers['user-agent']
        );
    }

    return jwt.sign(
        payload,
        process.env.PRIVATE_KEY,
        signOptions
    );
}


module.exports = {
    createToken: createToken
};
