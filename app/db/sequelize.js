const { Sequelize } = require('sequelize');

const UserModel = require('../models/user');
const ChannelModel = require('../models/channel');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    }
});

const User = UserModel(sequelize, Sequelize);
const Channel = ChannelModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    User,
    Channel
}
