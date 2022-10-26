const express = require("express");

const router = express.Router();

const { priority } = require("../../../controllers/priority")

router.post("/:id",priority);

module.exports = router;