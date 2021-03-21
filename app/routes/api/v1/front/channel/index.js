const { Router } = require('express');
const router = new Router();

const listController = require('../../../../../http/controllers/api/v1/channel/front/list');

router.get('/', listController);

module.exports = router;
