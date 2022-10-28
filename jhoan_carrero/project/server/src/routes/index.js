const express = require('express');

const api = require('./api');
const web = require('./web');

const router = express.Router();

router.use('/api/v1', api);
router.use(web);

module.exports = router;
