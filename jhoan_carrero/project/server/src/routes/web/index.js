const express = require('express');

const clientDir = require('../../client.dir');

const router = express.Router();

router.use(express.static(clientDir));

router.use('/*', (req, res) => res.sendFile(`${clientDir}/index.html`));

module.exports = router;
