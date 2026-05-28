import express from 'express';
import {
  getGlobalActivities,
  getRepositoryActivities,
  getUserActivities,
} from '../controllers/activity.controller.js';
import schemaValidator from '../middleware/schemaValidator.js';
import { contracts } from '../contracts/index.js';
import { protect } from '../middleware/authMiddleware.js';

/**
 * @openapi
 * /api/v1/activities/global:
 *   get:
 *     tags:
 *       - Activities
 *     responses:
 *       '200':
 *         description: Global activity feed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @openapi
 * /api/v1/activities/user/{username}:
 *   get:
 *     tags:
 *       - Activities
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User activity feed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

router.get('/global', ...schemaValidator(contracts.activities.global), getGlobalActivities);
router.get('/user/:username', ...schemaValidator(contracts.activities.user), getUserActivities);

/**
 * @openapi
 * /api/v1/activities/repository/{repo}:
 *   get:
 *     tags:
 *       - Activities
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: repo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Repository activity feed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

router.get('/repository/:repo', protect, ...schemaValidator(contracts.activities.repository), getRepositoryActivities);

export default router;
