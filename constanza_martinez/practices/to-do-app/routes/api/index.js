/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

router.use('/to-do', require('./to-do'));
router.use('/priority', require('./priority'));
router.use('/login', require('./login'));

module.exports = router;
