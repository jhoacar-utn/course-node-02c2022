import { handleRegister } from '@src/controllers/user';
import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /api/user:
 *  post:
 *      summary: Register new user
 *      tags:
 *          - User
 *      description: Register a new model of user
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: name
 *            required: true
 *            description: Name of the user
 *            schema:
 *              type: string
 *              example: example
 *          - in: body
 *            name: email
 *            required: true
 *            description: Email of the user
 *            schema:
 *              type: email
 *              example: example@example.com
 *          - in: body
 *            name: password
 *            required: true
 *            description: Password of the user
 *            schema:
 *              type: string
 *              example: example
 *          - in: body
 *            name: confirmPassword
 *            required: true
 *            description: Confirmation password of the user
 *            schema:
 *              type: string
 *              example: example
 *      responses:
 *          201:
 *              description: User registered succesfully
 *              schema:
 *                  type: json
 *                  example: {"message":"User registered succesfully"}
 */
router.post('/', handleRegister);

export default router;
