const { Router } = require('express');
const router = new Router();

const v1routes = require('./v1');

router.use('/v1', v1routes);

module.exports = router;
