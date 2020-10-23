const { Router } = require('express');
const router = new Router();

const authMiddleware = require('../../../middlewares/auth');

router.use(
    '/auth',
    require('./auth')
);
router.use(
    '/channel',
    authMiddleware,
    require('./channel')
);

module.exports = router;