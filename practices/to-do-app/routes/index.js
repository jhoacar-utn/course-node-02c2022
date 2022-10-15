const express = require("express");

const router = express.Router();

router.use("/to-do",require("./to-do"));

module.exports = router;