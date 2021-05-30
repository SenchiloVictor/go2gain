const { createToken } = require('../../../../../services/auth/createToken');
const { User } = require('../../../../../db/sequelize');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    const user = await User.findOne({
        where: {
            email: req.fields.email
        }
    });

    if (!user) {

        return res.status(400).json({
            'errors': {
                'email': ['Incorrect email or password']
            }
        });
    }

    const isValidPassword = bcrypt.compareSync(
        req.fields.password,
        user.password
    );

    if (!isValidPassword) {

        return res.status(400).json({
            'errors': {
                'password': ['Credentials invalid']
            }
        });
    }

    const token = createToken({
        id: user.id,
        emailVerified: user.email_verified,
        security: false
    });

    return res.json({
        token
    });
};
