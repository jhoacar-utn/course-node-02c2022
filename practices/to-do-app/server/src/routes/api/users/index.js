const express = require("express");

const router = express.Router();

const { create, index, destroy } = require("../../../controllers/user");

router.post("/", create)
router.get("/", index);
router.delete("/",destroy);

module.exports = router;