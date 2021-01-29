import { Request, Response } from 'express';

export const get = (req: Request, res: Response) => {
  try {
    res.status(200).json({ data: [] });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
