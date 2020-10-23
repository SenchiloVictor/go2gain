require('../../../../../helpers/validators');

const Validator = require('validatorjs');

module.exports = async (req, res, next) => {

    const validation = new Validator(req.fields, {
        email: 'required|email|uniqueEmail',
        password: 'required|string|min:8'
    });

    validation.checkAsync(() => {
        next();
    }, () => {
        res.status(401).json(
            validation.errors
        );
    });
}
