import express from 'express';
import {
    createRepository,
    getRepository,
    getUserRepositories,
    updateRepository,
    deleteRepository,
    starRepository,
    forkRepository,
} from '../controllers/repository.controller.js';
import { protect } from '../middleware/authMiddleware.js';
import validate from '../middleware/validate.js';
import {
    repoParamValidator,
    createRepositoryValidator,
    updateRepositoryValidator,
} from '../validators/repository.validators.js';
import schemaValidator from '../middleware/schemaValidator.js';
import { contracts } from '../contracts/index.js';

const router = express.Router();

//Public routes
/**
 * @openapi
 * /api/v1/repositories/{username}:
 *   get:
 *     tags:
 *       - Repositories
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of repositories
 *       '404':
 *         description: Not found
 */
router.get('/:username', ...schemaValidator(contracts.repositories.listByUser), getUserRepositories);

/**
 * @openapi
 * /api/v1/repositories/{username}/{reponame}:
 *   get:
 *     tags:
 *       - Repositories
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: reponame
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Repository details
 *       '404':
 *         description: Not found
 */
router.get('/:username/:reponame', ...schemaValidator(contracts.repositories.get), validate(repoParamValidator), getRepository);

//Protected routes
/**
 * @openapi
 * /api/v1/repositories:
 *   post:
 *     tags:
 *       - Repositories
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '201':
 *         description: Repository created
 */
router.post('/', protect, ...schemaValidator(contracts.repositories.create), validate(createRepositoryValidator), createRepository);

/**
 * @openapi
 * /api/v1/repositories/{username}/{reponame}:
 *   put:
 *     tags:
 *       - Repositories
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Repository updated
 */
router.put('/:username/:reponame', protect, ...schemaValidator(contracts.repositories.update), validate(repoParamValidator), validate(updateRepositoryValidator), updateRepository);

/**
 * @openapi
 * /api/v1/repositories/{username}/{reponame}:
 *   delete:
 *     tags:
 *       - Repositories
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Action successful
 */
router.delete('/:username/:reponame', protect, ...schemaValidator(contracts.repositories.remove), validate(repoParamValidator), deleteRepository);

/**
 * @openapi
 * /api/v1/repositories/{username}/{reponame}/star:
 *   post:
 *     tags:
 *       - Repositories
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Action successful
 */
router.post('/:username/:reponame/star', protect, ...schemaValidator(contracts.repositories.star), validate(repoParamValidator), starRepository);

/**
 * @openapi
 * /api/v1/repositories/{username}/{reponame}/fork:
 *   post:
 *     tags:
 *       - Repositories
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '201':
 *         description: Repository created from fork
 */
router.post('/:username/:reponame/fork', protect, ...schemaValidator(contracts.repositories.fork), validate(repoParamValidator), forkRepository);

export default router;
