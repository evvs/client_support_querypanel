import express, { Application } from 'express';
import bodyParser from 'body-parser';
import * as routers from './routers';
require('dotenv').config();

const app: Application = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', routers.users);
app.use('/auth', routers.auth);
app.use('/query', routers.query);

const start = async () => {
  try {
    app.listen(port, (): void => {
      console.log(`Application started on port ${port}`);
    });
  } catch (error) {
    console.log('Server error on start: ', error);
    process.exit(1);
  }
};

start();
