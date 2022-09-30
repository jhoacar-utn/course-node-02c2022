import { Router, static as Static } from 'express';
import { resolve, join /* , dirname */ } from 'path';
// import { fileURLToPath } from 'url';

const router = Router();

const client = resolve(join(__dirname/* dirname(fileURLToPath(import.meta.url) */), '../../../../client/dist');

router.use(Static(client));

export default router;
