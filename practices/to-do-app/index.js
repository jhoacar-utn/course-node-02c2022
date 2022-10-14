const app = require("./server");

const port = 8888;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})