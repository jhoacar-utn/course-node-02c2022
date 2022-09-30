import { Router } from 'express';
import docs from './docs';
import user from './user';

const router = Router();

router.use('/docs', docs);

router.use('/user', user);

export default router;
