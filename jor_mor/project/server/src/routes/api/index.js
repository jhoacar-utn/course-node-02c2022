/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const { notfound } = require('../../controllers/error');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.use(cors());

router.use('/emojis', require('./emoji'));
router.use('/votes', require('./votes'));
// router.use("/users", require("./users"));
// router.use("/auth", require("./auth"));

router.use(notfound);

module.exports = router;
