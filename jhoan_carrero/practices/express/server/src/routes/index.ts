import { Router } from 'express';
import api from './api';
import web from './web';

const router = Router();

router.use('/api', api);
router.use('/', web);

export default router;
