const express = require("express");

const router = express.Router();

router.use("/to-do", require("./to-do"));
router.use("/priority", require("./priority"));

module.exports = router;