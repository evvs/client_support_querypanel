import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  try {
    
    

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ data: 'okey' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};