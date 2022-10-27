/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

router.use('/api/v1', require('./api'));
router.use('/', require('./web'));

module.exports = router;
