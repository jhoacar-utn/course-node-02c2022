import { handleLogin } from '@controllers/auth';
import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: Authenticate a new session
 *      tags:
 *          - Authentication
 *      description: authenticate a session using jsonwebtokens
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: email
 *            required: true
 *            schema:
 *              type: string
 *              example: example@example.com
 *            description: email for the user to login
 *          - in: body
 *            name: password
 *            required: true
 *            schema:
 *              type: string
 *              example: example
 *            description: password for the user to login
 *      responses:
 *          200:
 *              description: Correct Login
 *              schema:
 *                  type: json
 *                  example: {"message":"User logged succesfully", "body": {"token":"..."}}
 *
 */
router.post('/login', handleLogin);

export default router;
