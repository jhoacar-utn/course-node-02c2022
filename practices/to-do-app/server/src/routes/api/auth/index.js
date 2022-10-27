const express = require('express');

const router = express.Router();

const { create } = require('../../../controllers/auth');
const { validateLogin } = require('../../../middlewares/auth');

router.post('/', validateLogin, create);

module.exports = router;
