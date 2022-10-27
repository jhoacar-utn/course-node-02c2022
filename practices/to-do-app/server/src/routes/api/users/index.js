/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const { create, index, destroy } = require('../../../controllers/user');
const { validateToken } = require('../../../middlewares/auth');
const { validateRegister, encryptPassword } = require('../../../middlewares/user');

router.post('/', validateRegister, encryptPassword, create);
router.get('/', validateToken, index);
router.delete('/', destroy);

module.exports = router;
