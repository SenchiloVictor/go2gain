const { Model, DataTypes } = require('sequelize');

class ChannelMessage extends Model {}

module.exports = (sequelize) => {
    return ChannelMessage.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        channel_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'channels',
                key: 'id'
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize, modelName: 'channels_messages',
        indexes: [
            { type: "FULLTEXT", name: 'channels_messages_idx', fields: ['message'] }
        ]
    });
}
