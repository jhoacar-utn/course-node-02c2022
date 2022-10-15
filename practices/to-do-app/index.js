require("dotenv").config();

const app = require("./server");

const port = process.env.PORT || 8888;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})