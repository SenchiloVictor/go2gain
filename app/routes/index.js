const { Router } = require('express');
const router = new Router();

const routes = require('./api');

router.use('/api', routes);

module.exports = router;