const { makeid } = require('../helpers/functions');

const { Model, DataTypes } = require('sequelize');

class VerificationsRequests extends Model {}

module.exports = (sequelize) => {
    return VerificationsRequests.init({
        id: {
            type: DataTypes.STRING(15),
            primaryKey: true,
            autoIncrement: false
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        verification_type: {
            type: DataTypes.ENUM([
                'email',
                'phone'
            ]),
            allowNull: false
        },
        hash_string: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'verifications_requests',
        createdAt: 'created_at',
        updatedAt: false,
        indexes: [
            {
                using: 'BTREE',
                fields: [
                    {attribute: 'verification_type'}
                ]
            }
        ],
        hooks: {
            beforeCreate: async (verificationRequest, options) => {

                do {

                    verificationRequest.id = makeid(15);
                } while (await VerificationsRequests.findOne({
                    where: {
                        'id': verificationRequest.id
                    }
                }));

                console.log('verificationRequest : ', verificationRequest);
            }
        }
    });
}
