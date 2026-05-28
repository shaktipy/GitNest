import express from 'express';
import {
    getUserProfile,
    updateProfile,
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
} from '../controllers/user.controller.js';
import { protect } from '../middleware/authMiddleware.js';
import validate from '../middleware/validate.js';
import { updateProfileValidator, usernameParamValidator } from '../validators/user.validators.js';
import schemaValidator from '../middleware/schemaValidator.js';
import { contracts } from '../contracts/index.js';

const router = express.Router();

// Public routes
/**
 * @openapi
 * /api/v1/users/{username}:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User profile
 *       '404':
 *         description: Not found
 */
router.get('/:username', ...schemaValidator(contracts.users.profile), validate(usernameParamValidator), getUserProfile);

/**
 * @openapi
 * /api/v1/users/{username}/followers:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Followers list
 *       '404':
 *         description: Not found
 */
router.get('/:username/followers', ...schemaValidator(contracts.users.followers), validate(usernameParamValidator), getFollowers);

/**
 * @openapi
 * /api/v1/users/{username}/following:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Following list
 *       '404':
 *         description: Not found
 */
router.get('/:username/following', ...schemaValidator(contracts.users.following), validate(usernameParamValidator), getFollowing);

// Protected routes
/**
 * @openapi
 * /api/v1/users/profile:
 *   put:
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Updated user profile
 */
router.put('/profile', protect, ...schemaValidator(contracts.users.updateProfile), validate(updateProfileValidator), updateProfile);

/**
 * @openapi
 * /api/v1/users/{username}/follow:
 *   post:
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Follow action result
 */
router.post('/:username/follow', protect, ...schemaValidator(contracts.users.follow), validate(usernameParamValidator), followUser);

/**
 * @openapi
 * /api/v1/users/{username}/follow:
 *   delete:
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Unfollow action result
 */
router.delete('/:username/follow', protect, ...schemaValidator(contracts.users.unfollow), validate(usernameParamValidator), unfollowUser);

export default router;
