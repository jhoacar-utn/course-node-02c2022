
const express = require("express");

const router = express.Router();

const client = require("../../client");

router.use(express.static(client));

router.use((req, res) => {
    return res.status(404).sendFile(client + "/404.html");
})

module.exports = router;