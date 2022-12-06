const express = require('express');
const cors = require('cors');
const { notfound } = require('../../controllers/error');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.use(cors());

router.use('/emojis', require('./emojis'));
router.use('/votes', require('./votes'));

router.use(notfound);

module.exports = router;
