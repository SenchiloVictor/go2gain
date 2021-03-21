const { Channel } = require('../../../../../../db/sequelize');

module.exports = async (req, res) => {

    const channels = await Channel.findAll();

    return res.json({
        channels
    });
};