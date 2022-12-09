// const path = require('path');
const express = require('express');

const router = express.Router();

const client = require('../../client');

router.use(express.static(client));

router.use((req, res) => res.sendFile(`${client}/index.html`));
// router.use((req, res)=>{
//     return res.status(404).sendFile(client + "/error404.html")
// })

module.exports = router;
