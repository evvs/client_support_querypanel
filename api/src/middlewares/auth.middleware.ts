import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации' })
    }
    const secretkey = process.env.JWTSECRET
    jwt.verify(token, `${secretkey}`);
    next()

  } catch (e) {
    res.status(401).json({ message: 'Нет авторизации' })
  }
}