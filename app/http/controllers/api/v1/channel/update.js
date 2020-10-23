const { Channel } = require('../../../../../db/sequelize');

module.exports = async (req, res) => {
    const channel = await Channel.findOne({
        where: {
            id: req.params.id,
            owner_id: req.auth.user.id
        }
    });

    if (!channel) {

        return res.status(400).json({
            'error': 'Channel not found'
        });
    }

    const { title, description } = req.fields;

    channel.title = title;
    channel.description = description;

    channel.save().then(model => {

        return res.json({
        });
    }).catch(e => {

        return res.status(400).json({
            'error': e.message
        });
    });
}
