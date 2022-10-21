const express = require("express");

const router = express.Router();

const { create } = require("../../../controllers/auth");

router.post("/", create);

module.exports = router;