const Validator = require('validatorjs');
const { User } = require('../db/sequelize');

Validator.registerAsync('uniqueEmail', async (email, attribute, requirement, passes) => {

    const user = await User.findOne({
        where: {
            'email': email
        }
    });

    !user ? passes() : passes(false, 'Email has already been taken.');
});
