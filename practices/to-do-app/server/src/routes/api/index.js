/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const { notfound } = require('../../controllers/error');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.use(cors());

router.use('/to-do', require('./to-do'));
router.use('/priority', require('./priority'));
router.use('/users', require('./users'));
router.use('/auth', require('./auth'));

router.use(notfound);

module.exports = router;
