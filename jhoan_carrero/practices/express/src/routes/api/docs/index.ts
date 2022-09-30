import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { Router } from 'express';
import { resolve, join } from 'path';
import { getAllFiles } from '../../../utils/file';

const router = Router();

const getFilesFromApi = (): string[] => {
  const pathRoutes = resolve(join(__dirname, '/../'));

  return getAllFiles(pathRoutes)
    .filter((file) => !file.includes(__dirname));
};

const swaggerOptions: Options = {
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
      license: {
        name: 'Nombre',
        url: 'url',
      },
      termsOfService: 'Terminos del servicio',
    },
    basePath: '/',
  },
  apis: getFilesFromApi(),
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

router.use(serve, setup(swaggerDocs));

export default router;
