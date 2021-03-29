const { verifyToken } = require('../services/auth/verifyToken');

module.exports = (req, res, next) => {

    if ('undefined' === typeof req.get('authorization')) {

        return res.status(401).json({
            error: 'Token invalid or expired'
        });
    }

    const token = req.get('authorization').substring(7);

    verifyToken(req, token)
        .then(() => next())
        .catch((err) => res.status(401).json(err))
};

