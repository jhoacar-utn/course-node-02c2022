const ToDo = require("../models/to-do");

module.exports.index = async (req, res) => {
    
    console.log("Index Function");
    
    res.json({
        result: [],
        total: 0
    })
}

module.exports.show = async (req, res) => {
    
    console.log("Show Function");
    
    res.json({
        result: {
            title: "Ejemplo",
            text: "texto de ejemplo",
            priority: 3
        }
    })
}