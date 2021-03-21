const { Router } = require('express');
const router = new Router();

router.use(
    '/channel',
    require('./channel')
);

module.exports = router;