import { Request, Response, Router } from 'express';
import { getVersion } from '@src/utils/package';
import api from './api';
import web from './web';

const router = Router();

const version = getVersion({ minimal: true });

router.use(`/api/v${version}`, api);
router.get('/api', (req: Request, res: Response) => {
  res.redirect(`/api/v${version}`);
});

router.use('/', web);

export default router;
