const Validator = require('validatorjs');

module.exports = async (req, res, next) => {
    const validation = new Validator(req.fields, {
        email: 'required|email',
        password: 'required|string|min:8'
    });

    validation.checkAsync(async () => {
        return next();
    }, () => {
        return res.status(401).json(
            validation.errors
        );
    });
}
