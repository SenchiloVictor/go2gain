const { Router } = require('express');
const router = new Router();

const createValidator = require('../../../../http/requests/api/v1/channel/create');
const createController = require('../../../../http/controllers/api/v1/channel/create');

const updateValidator = require('../../../../http/requests/api/v1/channel/update');
const updateController = require('../../../../http/controllers/api/v1/channel/update');

router.post(
    '/',
    createValidator,
    createController
);

router.put(
    '/:id?',
    updateValidator,
    updateController
);

module.exports = router;
