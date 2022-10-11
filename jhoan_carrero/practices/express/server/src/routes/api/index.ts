import { getVersion } from '@utils/package';
import { Request, Response, Router } from 'express';

import { readdirSync } from 'fs';

const router = Router();
/**
 * We use a dynamic import for all
 * subfolders in api folder
 */
readdirSync(__dirname, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((file) => import(`./${file.name}`)
    .then((module: any) => {
      router.use(`/${file.name}`, module.default);
    })
    .catch((error: Error) => {
      throw new Error(`An error has ocurred importing ${file.name}: ${error.message}`);
    }));

router.get('/', (req:Request, res:Response) => {
  const version = getVersion({ minimal: true });
  res.redirect(`v${version}/docs`);
});

export default router;
