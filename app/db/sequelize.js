const { Sequelize } = require('sequelize');

const UserModel = require('../models/user');
const ChannelModel = require('../models/channel');
const ChannelMessageModel = require('../models/channelMessage');
const VerificationRequestModel = require('../models/verificationsRequests');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    }
});

const User = UserModel(sequelize);
const Channel = ChannelModel(sequelize);
const ChannelMessage = ChannelMessageModel(sequelize);
const VerificationRequest = VerificationRequestModel(sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    sequelize,
    User,
    Channel,
    ChannelMessage,
    VerificationRequest
};
