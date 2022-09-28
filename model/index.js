const app = require("./server")
app.listen(8888, function ()  {
    const port = this._connectionKey.split(':').pop()
    
    console.log(`http://localhost:${port}`)
})