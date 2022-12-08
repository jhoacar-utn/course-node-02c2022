const express = require('express');

const router = express.Router();

const { votes } = require('../../../controllers/votes');

router.post('/:id', votes);

module.exports = router;
