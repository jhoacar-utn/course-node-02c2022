/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const client = require('../../client');

router.use(express.static(client));
/**
 * Handling 404 requests
 * - I am sending the React Application
 */
router.use((req, res) => res.sendFile(`${client}/index.html`));

module.exports = router;
