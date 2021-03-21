const { Model, DataTypes } = require('sequelize');

const EMAIL_MAX_LENGTH = 64;
const PASSWORD_MAX_LENGTH = 60;

class User extends Model {}

module.exports = (sequelize) => {
    return User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(EMAIL_MAX_LENGTH),
            required: true,
            allowNull: false,
            validate: {
                isEmail: true,
                len: [5, EMAIL_MAX_LENGTH]
            }
        },
        password: {
            type: DataTypes.STRING(PASSWORD_MAX_LENGTH),
            allowNull: false,
            validate: {
                len: [PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH]
            }
        },
        status: {
            type: DataTypes.ENUM('active', 'blocked', 'disable'),
            allowNull: false,
            defaultValue: 'active'
        }
    }, {
        sequelize, modelName: 'user',
        indexes: [
            {unique: true, fields: ['email']},
            {
                using: 'BTREE',
                fields: [
                    {attribute: 'email_verified'},
                ]
            },
            {
                using: 'BTREE',
                fields: [
                    {attribute: 'status'},
                ]
            }
        ]
    });
}
