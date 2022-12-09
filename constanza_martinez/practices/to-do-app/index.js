require('dotenv').config();

const app = require('./server');
const connection = require('./database');

const port = process.env.PORT || 8888;

app.listen(port, async () => {
  await connection();
  console.log(`Server listening on http://localhost:${port}`);
});
