
const express = require("express");

const router = express.Router();

const client = require("../../client");

router.use(express.static(client));

module.exports = router;