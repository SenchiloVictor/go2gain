const EMAIL_MAX_LENGTH = 64;
const PASSWORD_MAX_LENGTH = 60;

module.exports = (sequelize, type) => sequelize.define('users', {
    id: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email_verified: {
        type: type.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    },
    email: {
        type: type.STRING(EMAIL_MAX_LENGTH),
        required: true,
        allowNull: false,
        validate: {
            isEmail: true,
            len: [5, EMAIL_MAX_LENGTH]
        }
    },
    password: {
        type: type.STRING(PASSWORD_MAX_LENGTH),
        allowNull: false,
        validate: {
            len: [PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH]
        }
    }
}, {
    indexes: [
        { unique: true, fields: ['email'] },
        {
            using: 'BTREE',
            fields: [
                { attribute: 'email_verified', order: 'DESC' }
            ]
        }
    ]
});
