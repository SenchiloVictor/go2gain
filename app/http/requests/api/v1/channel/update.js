const Validator = require('validatorjs');

module.exports = async (req, res, next) => {
    const validation = new Validator(req.fields, {
        title: 'required|string|min:2|max:40',
        description: 'string|max:255'
    });

    validation.checkAsync(async () => {

        return next();
    }, () => {

        return res.status(401).json(
            validation.errors
        );
    });
}
