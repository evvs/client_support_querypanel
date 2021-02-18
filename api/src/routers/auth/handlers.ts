import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
require('dotenv').config();

const Pool = require('pg').Pool;
const dbpass = process.env.DBPASS;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: dbpass,
  port: 5432,
  database: 'usersdb',
});

export const register = async (req: Request, res: Response) => {
  try {
    const { name, login, password } = req.body;
    const candidate = await pool.query(
      'SELECT * FROM credentials WHERE login ILIKE $1',
      [login]
    );
    if (candidate.rows.length > 0) {
      return res.status(401).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const uuid = uuidv4();

    await pool.query("INSERT INTO users VALUES ($1, $2, 'user')", [uuid, name]);
    await pool.query(
      'INSERT INTO credentials (login, password, user_id) VALUES ($1, $2, $3)',
      [login, hashedPass, uuid]
    );

    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;

    const user = await pool.query(
      'SELECT * FROM credentials WHERE login = $1',
      [login]
    );

    if (user.rows.length === 0) {
      return res.status(401).json('Invalid Credential');
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const secretkey = process.env.JWTSECRET;

    const token = jwt.sign(
      {
        userid: user.rows[0].user_id,
      },
      `${secretkey}`
    );
    return res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { login, password } = req.body;

//     const user = await User.findOne({ login });
//     if (!user) {
//       return res.status(400).json({ message: 'User is not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Incorrect password' });
//     }

//     const secretkey = process.env.JWTSECRET

//     const token = jwt.sign(
//       {
//         userid: user.id,
//         username: user.name
//       },
//       `${secretkey}`,
//     );
//     return res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const checkToken = (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    return res.status(400).json({ message: 'invalid token' });
  }
};
