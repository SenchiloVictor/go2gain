module.exports = (sequelize, type) => sequelize.define('channels', {
    id: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    owner_id: {
        type: type.INTEGER,
        allowNull: false
    },
    title: {
        type: type.STRING(40),
        allowNull: false,
        validate: {
            len: [2, 40]
        }
    },
    description: {
        type: type.STRING(255),
        allowNull: true,
        validate: {
            len: [2, 255]
        }
    },
    status: {
        type: type.ENUM([
            'active',
            'inactive',
            'deleted',
            'blocked',
            'pending'
        ]),
        defaultValue: 'pending'
    }
}, {
    indexes: [
        {
            using: 'BTREE',
            fields: [
                { attribute: 'status' }
            ]
        }
    ]
});
