const express = require("express");

const router = express.Router();

const { create } = require("../../../controllers/user");

router.post("/", create)

module.exports = router;