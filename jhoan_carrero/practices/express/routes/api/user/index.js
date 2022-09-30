import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /api/user:
 *  get:
 *      summary: Get user
 *      tags:
 *          - Usuario
 *      description: Show an html
 *      produces:
 *          - text/html
 *      parameters:
 *          - in: path
 *            name: id
 *            description: ID of advertsiment
 *      responses:
 *          200:
 *              description: Advertisement by ID
 *              schema:
 *              type: json
 */
router.get('/', (req, res) => { res.send('<h1>User</h1>'); });

export default router;
