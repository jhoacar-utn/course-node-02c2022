const express = require('express');

const router = express.Router();

const { index, show, vote } = require('../constrollers/emojis');

router.get('/api/v1/emojis/:id', show);
router.post('/api/v1/emojis/votes', vote);
router.get('/api/v1/emojis', index);

module.exports = router;
