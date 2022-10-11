import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { Router } from 'express';
import { resolve, join /* , dirname */ } from 'path';
// import { fileURLToPath } from 'url';
import { getAllFiles } from '@utils/file';

import { getPackage } from '@utils/package';

// eslint-disable-next-line import/no-dynamic-require
const packageJSON = getPackage();

const router = Router();

const getFilesFromApi = (): string[] => {
  const thisPath = __dirname; // dirname(fileURLToPath(import.meta.url));
  const pathRoutes = resolve(join(thisPath, '/../'));

  return getAllFiles(pathRoutes)
    .filter((file) => !file.includes(thisPath));
};

const swaggerOptions: Options = {
  swaggerDefinition: {
    info: {
      title: packageJSON?.name || 'Express Project',
      version: packageJSON?.version || '1.0.0',
      contact: packageJSON?.contributors?.shift(),
      description: packageJSON.description || 'Express Project using Typescript',
      license: packageJSON?.licenses?.shift(),
    },
    basePath: '/api',
  },
  apis: getFilesFromApi(),
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

router.use(serve, setup(swaggerDocs));

export default router;
