const express = require('express');
const { index: indexMiddleware } = require('../../middlewares/emoji');
const { index: indexController, show } = require('../../controllers/emoji');

const router = express.Router();

router.get('/', indexMiddleware, indexController);
router.get('/:id', show);

module.exports = router;
