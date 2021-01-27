import express, {Request, Response, Application} from "express";
import bodyParser from "body-parser";

const app: Application = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', (req: Request, res: Response)=>{
  res.send('welcome')
})

app.listen(port, () => {
  console.log('Application started on port 8080')
})
