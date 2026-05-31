import express from 'express';
import { searchRepositories } from '../controllers/search.controller.js';
import { optionalAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', optionalAuth, searchRepositories);

export default router;
