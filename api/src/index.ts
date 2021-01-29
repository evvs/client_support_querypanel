import express, { Application } from 'express';
import bodyParser from 'body-parser';
import * as routers from './routers';

const app: Application = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', routers.users);

app.listen(port, (): void => {
  console.log(`Application started on port ${port}`);
});
