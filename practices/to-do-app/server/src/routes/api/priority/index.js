/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const { priority } = require('../../../controllers/priority');

router.post('/', priority);

module.exports = router;
