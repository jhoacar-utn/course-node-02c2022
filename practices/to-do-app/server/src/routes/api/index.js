const express = require("express");
const cors = require("cors");

const router = express.Router();

router.use(cors())

router.use("/to-do", require("./to-do"));
router.use("/priority", require("./priority"));
router.use("/users",require("./users"));
router.use("/auth",require("./auth"));

router.use((req,res)=>{
    res.status(404).json({
        errors:[
            {
                message: "Not found"
            }
        ]
    })
})

module.exports = router;