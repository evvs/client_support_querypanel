import express from 'express';
import { get } from './handlers'

const router = express.Router();

router.get('/', get);

export { router as users };
 