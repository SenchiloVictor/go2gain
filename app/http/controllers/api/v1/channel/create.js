const { Channel } = require('../../../../../db/sequelize');

module.exports = (req, res) => {

    Channel.create({
        owner_id: req.auth.user.id,
        title: req.fields.title,
        description: req.fields.description
    }).then(i => {

        const { id, title, createdAt } = i.dataValues;

        return res.json({
            id, title, createdAt
        });
    }).catch(e => {

        return res.status(400).json({
            'error': e.message
        });
    });
}
