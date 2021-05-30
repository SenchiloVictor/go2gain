const bcrypt = require('bcrypt');
const sendgrid = require('@sendgrid/mail');
const { sequelize, User, VerificationRequest } = require('../../../../../db/sequelize');
const { makeid } = require('../../../../../helpers/functions');


module.exports = async (req, res) => {

    const { email, password } = req.fields;

    const hash = bcrypt.hashSync(
        password,
        bcrypt.genSaltSync(5)
    );

    sequelize.transaction(async transaction => {

        this.user = await User.create({
            email: email,
            password: hash
        }, { transaction });

        this.verificationRequest = await VerificationRequest.create({
            user_id: this.user.id,
            verification_type: 'email',
            hash_string: makeid(30)
        }, { transaction });

    })
        .then(() => {
            const { user, verificationRequest } = this;

            sendgrid.setApiKey(
                process.env.SENDGRID_API_KEY_SECRET
            );

            console.log(`${req.headers.host}/confirm/${verificationRequest.hash_string}/email`);

            sendgrid.send({
                to: user.email,
                from: 'senchvictor@gmail.com',
                templateId: 'd-3b978b1e84494338a03a6ecacfcbc1d4',
                dynamic_template_data: {
                    'verificationUrl': `${req.headers.host}/confirm/${verificationRequest.hash_string}/email`
                }
            }).then(() => {

                return res.status(200).json({
                    email: user.email
                });
            }).catch(() => {

                return res.status(401).json({
                    email: 'Unknow error'
                });
            });
        })
        .catch(e => {

            return res.status(401).json({
                email: 'Unknow error'
            });
        });
}
