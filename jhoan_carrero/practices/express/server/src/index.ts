import 'dotenv/config';
// import open from 'open';
import app from '@boot/server';
import { initialization } from '@boot/database';
import { port } from '@config/server';

app.listen(port, () => {
  initialization();
  // open(`http://localhost:${port}`);
  console.log(`Server on http://localhost:${port}`);
});
