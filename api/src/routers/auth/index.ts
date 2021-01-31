import express from 'express';
import { register, login } from './handlers';

const router = express.Router();


// auth/login
router.post('/register', register);
router.post('/login', login);

export { router as auth };
 