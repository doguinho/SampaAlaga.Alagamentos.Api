import "reflect-metadata";
import express from 'express';
import {createConnection} from "typeorm";

const connection = createConnection();

const app = express();

app.get('/teste',(req,resp)=>{
  return resp.send('oi')
})

app.listen(3000,() => console.log('Server is up http://localhost:3000'))