const express = require('express');
const { vote } = require('../../controllers/vote');

const router = express.Router();

router.post('/', vote);

module.exports = router;
