import express from 'express';
import { getDatabases, post } from './handlers'

const router = express.Router();

router.post('/', post);
router.post('/databases', getDatabases);

export { router as query };
 