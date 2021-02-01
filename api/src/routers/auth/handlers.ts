import { Request, Response } from 'express';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const register = async (req: Request, res: Response) => {
  try {
    const { name, login, department, password } = req.body;
    const candidate = await User.findOne({ login });
    if (candidate) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPass = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      login,
      password: hashedPass,
      role: 'user',
    });

    await user.save();
    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({ message: 'User is not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const secretkey = process.env.JWTSECRET

    const token = jwt.sign(
      {
        userid: user.id,
      },
      `${secretkey}`,
      { expiresIn: '1h' }
    );
    return res.json({ token, userId: user.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
