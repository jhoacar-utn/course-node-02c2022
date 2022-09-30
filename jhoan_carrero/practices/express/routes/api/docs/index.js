/* eslint-disable no-underscore-dangle */
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { Router } from 'express';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { getAllFiles } from '../../../utils/file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
/**
 * @return {Array}
 */
const getFilesFromApi = () => {
  const pathRoutes = resolve(`${__dirname}/../`);

  return getAllFiles(pathRoutes)
    .filter((file) => !file.includes(__dirname));
};

/**
 * @type {swaggerJSDoc.Options}
 */
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Titulo',
      version: 'version',
      contact: {
        name: 'Jhoan Carrero',
        email: 'carrerojhoan@gmail.com',
        url: 'https://github.com/jhoacar',
      },
      description: 'Descripcion',
      license: 'Licencia',
      termsOfService: 'Terminos del servicio',
    },
    basePath: '/',
  },
  apis: getFilesFromApi(),
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

router.use(serve, setup(swaggerDocs));

export default router;
