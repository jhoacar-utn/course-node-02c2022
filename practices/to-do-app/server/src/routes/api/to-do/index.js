/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const { index, show } = require('../../../controllers/to-do');
const { validateToken } = require('../../../middlewares/auth');

router.get('/', validateToken, index);
router.get('/:id', validateToken, show);

module.exports = router;
