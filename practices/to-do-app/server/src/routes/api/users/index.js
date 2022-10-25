const express = require("express");

const router = express.Router();

const { create, index, destroy } = require("../../../controllers/user");
const { validateRegister, encryptPassword } = require("../../../middlewares/user");

router.post("/", validateRegister, encryptPassword, create)
router.get("/", index);
router.delete("/", destroy);

module.exports = router;