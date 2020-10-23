const jwt = require('jsonwebtoken');

const verifyToken = (req, token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.PUBLIC_KEY, (err, data) => {
            if (err) {
                return reject({'error': 'Token invalid or expired'});
            }

            if (typeof data.sign === 'string') {
                const signIsValid = ((sign, ip, agent) => bcrypt.compareSync(`${ip}:${agent}`, sign))(
                    data.sign,
                    req.connection.remoteAddress,
                    req.headers['user-agent']
                );

                if (!signIsValid) {
                    return reject({'error': 'Token invalid or expired'});
                }
            }

            req.auth = { user: data };

            resolve();
        })
    });
}

module.exports = {
    verifyToken: verifyToken
};
