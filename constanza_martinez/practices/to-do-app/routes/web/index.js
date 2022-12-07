/* eslint-disable import/no-unresolved */
const path = require('path');
const express = require('express');

const router = express.Router();

const client = path.resolve(`${__dirname}/../../client`);
console.log(client);

router.use(express.static(client));

module.exports = router;
