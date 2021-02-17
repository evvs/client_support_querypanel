import { Request, Response } from 'express';
import { Pool } from 'pg';


export const getDatabases = async (req: Request, res: Response) => {
  try {
    const { host, port } = req.body;
    const pool = new Pool({
      user: 'postgres',
      host,
      password: '7830',
      port,
    });
    const data = await pool.query('SELECT datname FROM pg_database;');
    res.status(200).json({ data: data.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const post = async (req: Request, res: Response) => {
  try {
    const { host, port, database, query } = req.body;
    const pool = new Pool({
      user: 'postgres',
      host,
      password: '7830',
      port,
      database
    });
    const data = await pool.query(query);
    res.status(200).json({ data: data.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
