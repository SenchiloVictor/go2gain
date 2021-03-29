module.exports = async (req, res) => {

    const { user } = req.auth;

    return res.json({
        user
    });
}