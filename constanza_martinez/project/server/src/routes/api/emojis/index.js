const express = require('express');

const router = express.Router();

const { index, showById } = require('../../../controllers/emoji');

router.get('/', index);
router.get('/:id', showById);

module.exports = router;
