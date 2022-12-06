/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const { index, show } = require('../../../controllers/emojiController');

router.get('/', index);
router.get('/:id', show);

module.exports = router;
