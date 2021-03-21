const { Model, DataTypes } = require('sequelize');

const User = require('./user');
class Channel extends Model {}

module.exports = (sequelize) => {
    return Channel.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                len: [2, 40]
            }
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
            validate: {
                len: [2, 255]
            }
        },
        status: {
            type: DataTypes.ENUM([
                'active',
                'inactive',
                'deleted',
                'blocked',
                'pending'
            ]),
            defaultValue: 'pending'
        }
    }, {
        sequelize,
        modelName: 'channel',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                using: 'BTREE',
                fields: [
                    {attribute: 'status'}
                ]
            }
        ]
    });
}