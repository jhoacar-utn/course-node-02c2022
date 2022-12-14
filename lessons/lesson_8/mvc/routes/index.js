/* eslint-disable import/no-unresolved */
const { Router } = require('express');
const { welcomeMiddleware } = require('../middlewares');
const { welcomeController } = require('../controllers');

const router = Router();

router.get('/welcome', welcomeMiddleware, welcomeController);

module.exports = router;
