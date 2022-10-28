const express = require('express');

const emojis = require('./emojis');
const votes = require('./votes');

const { notFound } = require('../../controllers/errors');

const router = express.Router();

router.use('/emojis', emojis);
router.use('/votes', votes);
router.use('/*', notFound);

module.exports = router;
