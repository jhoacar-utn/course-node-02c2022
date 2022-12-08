const express = require('express');
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.use('/api/v1', require('./api'));
router.use('/', require('./web'));

module.exports = router;
