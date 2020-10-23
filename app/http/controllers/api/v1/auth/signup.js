const bcrypt = require('bcrypt');

const { User } = require('../../../../../db/sequelize');

module.exports = (req, res) => {

    const { email, password } = req.fields;

    const hash = bcrypt.hashSync(
        password,
        bcrypt.genSaltSync(5)
    );

    User.create({
        email: email,
        password: hash
    }).then(i => {

        return res.status(200).json({
            email: i.email
        });
    }).catch(e => {

        return res.status(401).json({
            errors:{
                email: e.message
            }
        });
    })
}
