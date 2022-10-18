module.exports.priority = async function (req, res) {

    console.log("Priority Function");
    
    res.json({
        result: {
            title: "Ejemplo",
            text: "texto de ejemplo",
            priority: 4
        }
    })
}