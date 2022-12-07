/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const { votes } = require('../../../controllers/votes');

router.post('/', votes);

module.exports = router;
