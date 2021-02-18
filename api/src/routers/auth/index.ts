import express from 'express';
import { register, login, checkToken } from './handlers';
import auth from '../../middlewares/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/validatetoken', auth, checkToken);

export { router as auth };
 