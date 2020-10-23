const { Router } = require('express');
const router = new Router();

const signupController = require('../../../../http/controllers/api/v1/auth/signup');
const signupRequest = require('../../../../http/requests/api/v1/auth/signup');

const signinController = require('../../../../http/controllers/api/v1/auth/signin');
const signinRequest = require('../../../../http/requests/api/v1/auth/signin');

router.post('/signup',
    signupRequest,
    signupController
);

router.post('/signin/:security?',
    signinRequest,
    signinController
);

module.exports = router;
