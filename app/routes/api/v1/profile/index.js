const { Router } = require('express');
const router = new Router();

const profileGetController = require('../../../../http/controllers/api/v1/profile/get');

router.get(
    '/',
    profileGetController
);

module.exports = router;
