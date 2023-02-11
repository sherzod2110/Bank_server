import express from 'express';
import path from 'path';
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/routes.js';
const PORT = process.env.PORT || 1000;


const app = express();

app.use(cors())
app.use(express.json());

app.use(router);


app.all('/*', (req, res) => {
    res.status(404).json({
      message: req.url + ' not found',
      status: 404
    })
  })

app.listen(PORT, console.log(PORT));