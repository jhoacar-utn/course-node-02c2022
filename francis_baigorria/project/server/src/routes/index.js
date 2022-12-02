const express = require('express');

const router = express.Router();

const { index, show, vote } = require('../constrollers/emojis');

router.get('/api/v1/emojis/:id', show);
router.post('/api/v1/votes', vote);
router.get('/', index);

module.exports = router;
