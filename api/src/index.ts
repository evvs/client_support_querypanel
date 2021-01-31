import express, { Application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as routers from './routers';
require('dotenv').config();

const app: Application = express();
const port = process.env.PORT || 8080;
const dbpass = process.env.DBPASS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', routers.users);
app.use('/auth', routers.auth);


app.get('/testconnection', (_, res) => {
  res.status(200).json({ status: 'server is working' });
});

const start = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONN}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connect to db success');
    app.listen(port, (): void => {
      console.log(`Application started on port ${port}`);
    });
  } catch (error) {
    console.log('Server error on start: ', error);
    process.exit(1);
  }
};

start();

