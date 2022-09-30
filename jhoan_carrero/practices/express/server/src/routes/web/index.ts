import { Router, static as Static } from 'express';
import { resolve, join } from 'path';

const router = Router();

const client = resolve(join(__dirname, '../../../../client/dist'));

router.use(Static(client));

export default router;
