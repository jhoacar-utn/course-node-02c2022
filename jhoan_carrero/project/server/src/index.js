require('dotenv').config();

const app = require('./boot/server');
const connection = require('./boot/database');

const { port } = require('./config/server');

app.listen(port, async () => {
  await connection();
  console.log(`Server on http://localhost:${port}`);
});
