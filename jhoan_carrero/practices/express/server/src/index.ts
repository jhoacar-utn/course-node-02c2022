import 'dotenv/config';
// import open from 'open';
import app from './boot/server';

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  // open(`http://localhost:${PORT}`);
  console.log(`Server on http://localhost:${PORT}`);
});
