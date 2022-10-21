const express = require("express");
const cors = require("cors");

const router = express.Router();

router.use(cors())

router.use("/to-do", require("./to-do"));
router.use("/priority", require("./priority"));

module.exports = router;