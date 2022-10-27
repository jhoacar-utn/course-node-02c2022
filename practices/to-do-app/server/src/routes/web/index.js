/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const client = require('../../client');

router.use(express.static(client));

router.use((req, res) => res.status(404).sendFile(`${client}/404.html`));

module.exports = router;
