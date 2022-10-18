const express = require("express");

const router = express.Router();

const { index , create, update, remove } = require("../controllers/to-do")

router.get("/", index)
router.post("/", create)
router.put("/", update)
router.delete("/", remove)

module.exports = router;